"use client";
import styles from "./instagram.module.scss";
import Image from "next/image";
import { useState, useEffect, use } from "react";

export default function InstagramPost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://graph.instagram.com/v20.0/me/media?fields=id&access_token=87f108a79f16df7add250019a6b8f47c`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Instagram Posts</h1>
      <ul className={styles.list}>
        {data.map(({ node }: { node: any }, i: number) => {
          return (
            <li key={i}>
              <Image
                src={node.display_resources[0].src}
                alt="instagram image"
              />
              <p>{node.edge_media_to_caption.edges[0]?.node.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
