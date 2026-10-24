import { Content, isFilled } from "@prismicio/client";
import { PrismicTable, SliceComponentProps } from "@prismicio/react";
import style from "./style.module.scss";

/**
 * Props for `TableBlock`.
 */
export type TableBlockProps = SliceComponentProps<Content.TableBlockSlice>;

/**
 * Component for "TableBlock" Slices.
 */
const TableBlock = ({ slice }: TableBlockProps): JSX.Element | null => {
  if (!isFilled.table(slice.primary.table)) return null;

  return (
    <figure
      className={style.tableBlock}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* wrapper scrollabile per non rompere il layout su mobile */}
      <div className={style.tableWrapper}>
        <PrismicTable
          field={slice.primary.table}
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
