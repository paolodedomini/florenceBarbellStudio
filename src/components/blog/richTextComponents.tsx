import { JSXMapSerializer } from "@prismicio/react";
import style from "@/app/[locale]/blog/[post]/style.module.scss";
import labels from "./labels.module.scss";

//oggetto per la configurazione del rich text di prismic.io
export const richTextComponents: JSXMapSerializer = {
  heading1: ({ children }) => <h2>{children}</h2>,
  list: ({ children }) => (
    <ul className={style.listaBlog}>{children.map((child) => child)}</ul>
  ),
  oList: ({ children }) => {
    return (
      <ol className={`${style.listaBlog} ${style.numerata}`}>
        {children.map((child) => child)}
      </ol>
    );
  },
  label: ({ node, children }) => (
    <span className={labels[node.data.label]}>{children}</span>
  ),
};
