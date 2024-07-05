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
/* DATA */
import heroData from "../../../public/data/hero.json";
import homeData from "../../../public/data/home.json";
import staffData from "../../../public/data/staff.json";
import Splash from "@/components/splash/splash";
/*IMAGES*/
import HeroImage from "../../../public/image/hero.jpg";

import dynamic from "next/dynamic";
import InstagramWrapperToken from "@/components/instagram/instagramWrapper";

const CarouselImage = dynamic(
  () => import("@/components/carousel/carouselImage")
);
const InstagramPost = dynamic(() => import("@/components/instagram/instagram"));

/**
 * PAGINA
 * Utilizzare le pagine per fetchare i dati e passarli ai componenti
 * Mantenere le pagine componenti server-side
 * Passare i dati ai componenti tramite props
 */

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const HeroDataLang = heroData[locale as keyof typeof heroData];

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
        <Tabs data={homeData[locale as keyof typeof homeData].tabs} />
      </AnimatedSection>
      <AnimatedSection overflowHidden={false}>
        <Parallax
          testo={homeData[locale as keyof typeof homeData].parallax}
          imageURL="/image/parallaxhome.jpg"
          alt="test"
          height="400px"
        />{" "}
      </AnimatedSection>
      <div className={"wrapperFlex"}>
        <TitleAnimations
          testo="Florence Barbell GYM"
          subtesto="300mt2 di torture"
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
        <BigList data={homeData[locale as keyof typeof homeData].list} />

        <CarouselImage
          data={homeData[locale as keyof typeof homeData].carousel}
        />
      </AnimatedSection>
      <div className={"wrapperFlex"}>
        <TitleAnimations
          testo="Florence Barbell STAFF"
          subtesto="Ti faremo vomitare sangue dal culo"
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
        <Staff data={staffData[locale as keyof typeof homeData]} />
      </AnimatedSection>
      <AnimatedSection>
        {/*         <InstagramWrapperToken
          renderItem={(token: string) => <InstagramPost token={token} />}
        /> */}
      </AnimatedSection>
      <AnimatedSection overflowHidden={false}>
        <FormSection />
      </AnimatedSection>
    </main>
  );
}
