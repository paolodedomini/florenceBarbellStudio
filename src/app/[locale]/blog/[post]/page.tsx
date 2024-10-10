import { createClient } from "@/prismicio";
import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import TitleAnimations from "@/components/animations/titleAnimations";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";
import style from "./style.module.scss";
import ImagePreload from "@/components/loaders/imagePreLoad";
import SocialShare from "@/components/socialShare/socialShare";
import Script from "next/script";

type tParams = {
  post: string;
};

export default async function Page({ params }: { params: tParams }) {
  const client = createClient();
  const page = await client.getByUID("blogpage", params.post);

  //oggetto per la configurazione del rich text di prismic.io
  const components: JSXMapSerializer = {
    heading1: ({ children }) => <h2>{children}</h2>,
    list: ({ children }) => (
      <ul className={style.listaBlog}>{children.map((child) => child)}</ul>
    ),
    oList: ({ children }) => {
      return (
        <ul className={style.listaBlog}>{children.map((child) => child)}</ul>
      );
    },
  };

  return (
    <main className={style.blog}>
      <TitleAnimations
        testo={page.data.titolo as string}
        animation="word"
        className={"blogTitle"}
        once
      />
      <div className={style.blogMainImage}>
        <ImagePreload
          src={page.data.immagine_principale.url || ""}
          alt={page.data.immagine_principale.alt || "main image"}
          type="fill"
        />
      </div>
      <SocialShare url={params.post} title={page.data.titolo as string} />
      <AnimatedSection>
        <PrismicRichText field={page.data.content} components={components} />
      </AnimatedSection>
      <Script
        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=florencebarbellstudio"
        strategy="lazyOnload"
        async
        defer
      />
    </main>
  );
}
