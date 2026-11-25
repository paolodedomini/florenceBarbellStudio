import type { Metadata } from "next";
import { RichTextField, asText, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import TitleAnimations from "@/components/animations/titleAnimations";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";
import style from "./style.module.scss";
import ImagePreload from "@/components/loaders/imagePreLoad";
import SocialShare from "@/components/socialShare/socialShare";
import { richTextComponents } from "@/components/blog/richTextComponents";
import { components } from "@/slices";

type tParams = {
  post: string;
};

const SITE_URL = "https://www.florencebarbellstudio.it";

/** testo dei soli paragrafi (senza titoli), tagliato a fine parola, per la meta description */
function excerpt(field: RichTextField, max = 155) {
  const paragraphs = field.filter((node) => node.type === "paragraph");
  const clean = asText(paragraphs as RichTextField).replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, clean.lastIndexOf(" ", max)) + "…";
}

/** FUNZIONE NEXT PER INSERIRE TITOLO, DESCRIZIONE E CANONICAL DI OGNI ARTICOLO */
export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("blogpage", params.post);
  const { data } = page;

  // se in Prismic mancano i campi SEO usa titolo e primo testo dell'articolo
  const firstText = data.slices.find((slice) => slice.slice_type === "text_block");
  const bodyText: RichTextField =
    isFilled.richText(data.content) || firstText?.slice_type !== "text_block"
      ? data.content
      : firstText.primary.content;
  const title = data.meta_title || data.titolo || "BarbellBlog";
  const description = data.meta_description || excerpt(bodyText);
  const image = isFilled.image(data.meta_image)
    ? data.meta_image
    : data.immagine_principale;
  const url = `${SITE_URL}/it/blog/${params.post}`;

  return {
    title: `${title} | Florence Barbell Studio`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Florence Barbell Studio",
      locale: "it_IT",
      publishedTime: page.first_publication_date,
      modifiedTime: page.last_publication_date,
      images: isFilled.image(image)
        ? [{ url: image.url, alt: image.alt || title }]
        : undefined,
    },
  };
}

export default async function Page({ params }: { params: tParams }) {
  const client = createClient();
  const page = await client.getByUID("blogpage", params.post);

  return (
    <main className={style.blog}>
      <TitleAnimations
        testo={page.data.titolo as string}
        animation="word"
        className={"blogTitle"}
        isMainTitle
        once
      />
      {page.data.immagine_principale.url && (
        <div className={style.blogMainImage}>
          <ImagePreload
            src={page.data.immagine_principale.url || ""}
            alt={page.data.immagine_principale.alt || "main image"}
            type="fill"
          />
        </div>
      )}
      <SocialShare url={`it/blog/${params.post}`} title={page.data.titolo as string} />
      <AnimatedSection>
        <PrismicRichText
          field={page.data.content}
          components={richTextComponents}
        />
        <SliceZone slices={page.data.slices} components={components} />
      </AnimatedSection>
      <SocialShare url={`it/blog/${params.post}`} title={page.data.titolo as string} />
    </main>
  );
}
