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

export default async function Page({ params }: { params: tParams }) {
  const client = createClient();
  const page = await client.getByUID("blogpage", params.post);

  return (
    <main className={style.blog}>
      <TitleAnimations
        testo={page.data.titolo as string}
        animation="word"
        className={"blogTitle"}
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
      <SocialShare url={params.post} title={page.data.titolo as string} />
      <AnimatedSection>
        <PrismicRichText
          field={page.data.content}
          components={richTextComponents}
        />
        <SliceZone slices={page.data.slices} components={components} />
      </AnimatedSection>
    </main>
  );
}
