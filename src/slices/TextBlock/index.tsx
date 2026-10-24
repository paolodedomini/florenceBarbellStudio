import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { richTextComponents } from "@/components/blog/richTextComponents";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.content}
        components={richTextComponents}
      />
    </section>
  );
};

export default TextBlock;
