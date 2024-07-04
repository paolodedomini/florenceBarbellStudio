"use client";
import styles from "./instagram.module.scss";

import { useState, useEffect } from "react";
import ImagePreload from "../loaders/imagePreLoad";
import TitleAnimations from "../animations/titleAnimations";

type Tdata = {
  data: {
    id: string;
    media_url: string;
    permalink: string;
    media_type: string;
    thumbnail_url: string;
  }[];
};

export default function InstagramPost() {
  const [data, setData] = useState<Tdata | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://graph.instagram.com/v20.0/me/media?fields=id,media_url,permalink,media_type,thumbnail_url&limit=10&access_token=IGQWRNWDEyQkNEWmZAqdjdYM2ZAPVTdMYUlDOU9Mejl4V0xIN1c1cDV1SGc1MDFQZAnpqSVRQbGkzTUxDNmQxNHE5anNWeWZAUZA2Jod29RVXR5S0otLWNSdDhzUF82dGFWMU5SdFVyMGZAmWUQ4RWNrTTFoM1hqQjFhQ2MZD`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.wrapperInstagram}>
      <TitleAnimations testo="BarbellGram" animation="letter" />
      <ul className={styles.wrapperInstagram__list}>
        {data &&
          data.data.map(
            (post: {
              id: string;
              media_url: string;
              permalink: string;
              media_type: string;
              thumbnail_url: string;
            }) => {
              return (
                <li key={post.id}>
                  <a target="_blank" href={post.permalink}>
                    {loading ? (
                      <div>loading</div>
                    ) : post.media_type === "VIDEO" ? (
                      <ImagePreload
                        src={post.thumbnail_url}
                        type="fixed"
                        width={300}
                        height={300}
                        alt="instagram post"
                        isLazy={true}
                      />
                    ) : (
                      <ImagePreload
                        src={post.media_url}
                        type="fixed"
                        width={300}
                        height={300}
                        alt="instagram post"
                        isLazy={true}
                      />
                    )}
                  </a>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
}
