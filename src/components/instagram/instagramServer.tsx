import styles from "./instagram.module.scss";
import ImagePreload from "../loaders/imagePreLoad";
import TitleAnimations from "../animations/titleAnimations";
import Image from "next/image";
type Tdata = {
  data: {
    id: string;
    media_url: string;
    permalink: string;
    media_type: string;
    thumbnail_url: string;
  }[];
};

export default async function InstagramPostServer({
  token,
  client,
}: {
  token: string;
  client: string;
}) {
  const data: any = await fetch(
    `https://graph.instagram.com/v20.0/me/media?fields=id,media_url,permalink,media_type,thumbnail_url&limit=10&access_token=IGQWRORkRfdkJaaHNQZAWJMQ2pjQm1Xc1htVnJ4R2ZAicmM0RXQzQzJaQVBJaW51Y2p3LWNfVF9Tdld0U2pqV0FtdEFhelhwVHNfc19ZANUZANb2ZA6NW1zT2pReVh1LWlGVGhXeUkzZA3pFQ2RkbElPOFhiRkpiMVA3VEUZD`,
    { next: { revalidate: 3600 } }
  );
  const dataRes: Tdata = await data.json();

  if (!dataRes) return <div>loading</div>;
  console.log(dataRes, "data");

  return (
    <div className={styles.wrapperInstagram}>
      <TitleAnimations testo="BarbellGram" animation="letter" />
      <ul className={styles.wrapperInstagram__list}>
        {dataRes &&
          dataRes.data?.map(
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
                    {post.media_type === "VIDEO" ? (
                      <Image
                        src={post.thumbnail_url}
                        loading="lazy"
                        width={300}
                        height={300}
                        alt="instagram post"
                      />
                    ) : (
                      <Image
                        src={post.media_url}
                        loading="lazy"
                        width={300}
                        height={300}
                        alt="instagram post"
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
