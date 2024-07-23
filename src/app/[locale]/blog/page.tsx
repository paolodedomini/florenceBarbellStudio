import { createClient } from "@/prismicio";
import style from "./style.module.scss";
import TitleAnimations from "@/components/animations/titleAnimations";
import BlogList from "@/components/list/blogList";
async function BlogIndex() {
  const client = createClient();
  const page = await client.getAllByType("blogpage");
  console.log(page);
  return (
    <main className={style.blogPage}>
      <TitleAnimations testo="BarbellBlog" animation="letter" once />
      <BlogList posts={page} />
    </main>
  );
}

export default BlogIndex;
