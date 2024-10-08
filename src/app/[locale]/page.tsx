import HeroVideo from "@/components/heros/Hero";
import styles from "./page.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import Parallax from "@/components/parallax/parallax";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";
import Tabs from "@/components/tabs/tabs";
import Staff from "@/components/staff/staff";
import TitleAnimations from "@/components/animations/titleAnimations";
import Image from "next/image";
import BigList from "@/components/list/bigList";
import FormSection from "@/components/form/formSection";
import Splash from "@/components/splash/splash";
import GalleryGrid from "@/components/gallery/gallery";

/* DATA */
import heroData from "../../../public/data/hero.json";
import staffData from "../../../public/data/staff.json";

/*IMAGES*/
import HeroImage from "../../../public/image/hero.jpg";
import dynamic from "next/dynamic";

const CarouselImage = dynamic(
  () => import("@/components/carousel/carouselImage")
);
const InstagramPost = dynamic(() => import("@/components/instagram/instagram"));

/**
 * PAGINA
 * Utilizzare le pagine per fetch dei dati e passarli ai componenti
 * Mantenere le pagine componenti server-side
 * Passare i dati ai componenti tramite props
 */
type ThomeData = {
  default: {
    [key: string]: {
      titolo: string;
      tabs: { titolo: string; testo: string; image: string; link: string }[];
      parallax: string;
      list: { titolo: string }[];
      carousel: string[];
      gallery: string[];
    };
  };
};
export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const homeData: ThomeData = await import("../../../public/data/home.json");
  const HeroDataLang = heroData[locale as keyof typeof heroData];
  console.log(locale, "locale");
  return (
    <main className={styles.main}>
      <Splash />
      <HeroVideo typeOfData="image" IMGURL={HeroImage} data={HeroDataLang} />
      <div className={"wrapperFlex"}>
        <TitleAnimations testo="Florence Barbell Studio is" animation="word" />
        <Image
          src="/image/frecciatitoli.svg"
          alt="test"
          width="16"
          height="111"
        />
      </div>

      <AnimatedSection overflowHidden={true}>
        <Tabs data={homeData.default[locale].tabs} />
      </AnimatedSection>
      <AnimatedSection overflowHidden={false}>
        <Parallax
          testo={homeData.default[locale].parallax}
          imageURL="/image/parallaxhome.jpg"
          alt="test"
          height="400px"
        />{" "}
      </AnimatedSection>
      <div className={"wrapperFlex"}>
        <TitleAnimations
          testo="Florence Barbell GYM"
          subtesto="120m2"
          animation="word"
        />

        <Image
          src="/image/frecciatitoli.svg"
          alt="test"
          width="16"
          height="111"
        />
      </div>

      <AnimatedSection overflowHidden={false}>
        <BigList data={homeData.default[locale].list} />

        <CarouselImage data={homeData.default[locale].carousel} />
      </AnimatedSection>
      <div className={"wrapperFlex"}>
        <TitleAnimations
          testo="Florence Barbell STAFF"
          subtesto="Conosci il nostro staff"
          animation="word"
        />
        <Image
          src="/image/frecciatitoli.svg"
          alt="test"
          width="16"
          height="111"
        />
      </div>
      <AnimatedSection overflowHidden={false}>
        <Staff data={staffData[locale as keyof typeof staffData]} />
      </AnimatedSection>
      <AnimatedSection>
        <GalleryGrid images={homeData.default[locale].gallery} />
      </AnimatedSection>
      <AnimatedSection overflowHidden={false}>
        <FormSection />
      </AnimatedSection>
    </main>
  );
}
