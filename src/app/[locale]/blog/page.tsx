import { createClient } from "@/prismicio";
import style from "./style.module.scss";
import TitleAnimations from "@/components/animations/titleAnimations";
import BlogList from "@/components/list/blogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BarbellBlog",
  description: "Blog di Florence Barbell Studio",
};

async function BlogIndex() {
  const client = createClient();
  const page = await client.getAllByType("blogpage");

  return (
    <main className={style.blogPage}>
      <TitleAnimations testo="BarbellBlog" animation="letter" once />
      <BlogList posts={page} />
    </main>
  );
}

export default BlogIndex;
