import { Content, TableField, isFilled } from "@prismicio/client";
import { PrismicTable, SliceComponentProps } from "@prismicio/react";
import style from "./style.module.scss";

/**
 * Props for `TableBlock`.
 */
export type TableBlockProps = SliceComponentProps<Content.TableBlockSlice>;

/**
 * Se in Prismic la tabella non ha una riga di intestazione,
 * usa la prima riga del body come thead (a meno di "Senza intestazione").
 */
const withHead = (table: TableField<"filled">): TableField<"filled"> => {
  if (table.head?.rows.length || table.body.rows.length < 2) return table;

  const [first, ...rest] = table.body.rows;

  return {
    head: {
      rows: [
        {
          key: first.key,
          cells: first.cells.map((cell) => ({ ...cell, type: "header" })),
        },
      ],
    },
    body: { rows: rest },
  };
};

/**
 * Component for "TableBlock" Slices.
 */
const TableBlock = ({ slice }: TableBlockProps): JSX.Element | null => {
  const { table, no_header } = slice.primary;

  if (!isFilled.table(table)) return null;

  return (
    <figure
      className={style.tableBlock}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* wrapper scrollabile per non rompere il layout su mobile */}
      <div className={style.tableWrapper}>
        <PrismicTable
          field={no_header ? table : withHead(table)}
          components={{
            paragraph: ({ children }) => <>{children}</>,
          }}
        />
      </div>
      {slice.primary.caption && (
        <figcaption className={style.caption}>{slice.primary.caption}</figcaption>
      )}
    </figure>
  );
};

export default TableBlock;
