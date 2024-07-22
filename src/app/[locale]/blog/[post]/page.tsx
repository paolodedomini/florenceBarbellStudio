import { createClient } from "@/prismicio";
import TitleAnimations from "@/components/animations/titleAnimations";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";
import style from "./style.module.scss";
import ImagePreload from "@/components/loaders/imagePreLoad";
import SocialShare from "@/components/socialShare/socialShare";
import { revalidatePath } from "next/cache";

type tParams = {
  post: string;
};
export default async function Page({ params }: { params: tParams }) {
  const client = createClient();
  const page = await client.getByUID("blogpage", params.post);
  revalidatePath("/it/blog/[post]", "page");
  return (
    <main className={style.blog}>
      <TitleAnimations
        testo={page.data.titolo as string}
        animation="word"
        className={style.blogTitle}
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
      <AnimatedSection width="866px">
        {page.data.content.map((item, index) => {
          console.log(item);
          if (item.type === "paragraph") {
            return (
              <p key={index} dangerouslySetInnerHTML={{ __html: item.text }} />
            );
          }
          if (item.type === "image") {
            return (
              <div key={index} className={style.blogImage}>
                <ImagePreload
                  src={item.url || ""}
                  alt={item.alt || "image"}
                  type="fixed"
                  width={item.url ? item.dimensions.width : 0}
                  height={item.url ? item.dimensions.height : 0}
                />
              </div>
            );
          }
        })}
      </AnimatedSection>
    </main>
  );
}
