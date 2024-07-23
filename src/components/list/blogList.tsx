import { useLocale } from "next-intl";
import { AllDocumentTypes } from "../../../prismicio-types";
import style from "./list.module.scss";

function BlogList({ posts }: { posts: AllDocumentTypes[] }) {
  const locale = useLocale();
  console.log(posts, "posts");
  return (
    <ul className={style.blogList}>
      {posts.map((post: any, index: number) => {
        return (
          <li key={index}>
            <a href={`/${locale}/blog/${post.uid}`}>{post.data.titolo}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default BlogList;
