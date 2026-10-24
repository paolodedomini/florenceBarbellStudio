import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import style from "./style.module.scss";

/**
 * Props for `CalloutBlock`.
 */
export type CalloutBlockProps = SliceComponentProps<Content.CalloutBlockSlice>;

/**
 * Component for "CalloutBlock" Slices.
 */
const CalloutBlock = ({ slice }: CalloutBlockProps): JSX.Element => {
  const { label, content } = slice.primary;

  return (
    <aside
      className={style.callout}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={content}
        components={{
          // l'etichetta va in linea all'inizio del primo paragrafo
          paragraph: ({ children, node }) => (
            <p>
              {label && node === content[0] && (
                <strong className={style.label}>{label}: </strong>
              )}
              {children}
            </p>
          ),
        }}
      />
    </aside>
  );
};

export default CalloutBlock;
