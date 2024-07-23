"use client";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import style from "./socialShare.module.scss";
function SocialShare({ url, title }: { url: string; title: string }) {
  return (
    <div className={style.socialBar}>
      <EmailShareButton
        url={"https://florencebarbellstudio.it/" + url}
        subject={title}
        body="body"
        className={style.socialButton}
      >
        <EmailIcon size={25} round />
      </EmailShareButton>
      <FacebookShareButton
        url={"https://florencebarbellstudio.it/" + url}
        className={style.socialButton}
      >
        <FacebookIcon size={25} round />
      </FacebookShareButton>
      <LinkedinShareButton
        url={"https://florencebarbellstudio.it/" + url}
        title={title}
        className={style.socialButton}
      >
        <LinkedinIcon size={25} round />
      </LinkedinShareButton>
      <PinterestShareButton
        url={"https://florencebarbellstudio.it/" + url}
        media={"https://florencebarbellstudio.it/" + url}
        className={style.socialButton}
      >
        <PinterestIcon size={25} round />
      </PinterestShareButton>
      <RedditShareButton
        url={"https://florencebarbellstudio.it/" + url}
        title={title}
        className={style.socialButton}
      >
        <RedditIcon size={25} round />
      </RedditShareButton>
      <TelegramShareButton
        url={"https://florencebarbellstudio.it/" + url}
        title={title}
        className={style.socialButton}
      >
        <TelegramIcon size={25} round />
      </TelegramShareButton>
      <TwitterShareButton
        url={"https://florencebarbellstudio.it/" + url}
        title={title}
        className={style.socialButton}
      >
        <TwitterIcon size={25} round />
      </TwitterShareButton>
      <WhatsappShareButton
        url={"https://florencebarbellstudio.it/" + url}
        title={title}
        className={style.socialButton}
      >
        <WhatsappIcon size={25} round />
      </WhatsappShareButton>
    </div>
  );
}

export default SocialShare;
