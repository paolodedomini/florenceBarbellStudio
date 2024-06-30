import HeroVideo from "@/components/heros/Hero";
import styles from "./page.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import heroData from "../../../public/data/hero.json";
import homeData from "../../../public/data/home.json";
import staffData from "../../../public/data/staff.json";
import Parallax from "@/components/parallax/parallax";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";
import LeafletMain from "@/components/map/Leaflet";

import Tabs from "@/components/tabs/tabs";
import Staff from "@/components/staff/staff";
import TitleAnimations from "@/components/animations/titleAnimations";
import Image from "next/image";
import BigList from "@/components/list/bigList";
import CarouselImage from "@/components/carousel/carouselImage";
import FormSection from "@/components/form/formSection";

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
  const t = await getTranslations("generics");
  const HeroDataLang = heroData[locale as keyof typeof heroData];
  const address = {
    city: t("cittaName"),
    street: t("indirizzoName"),
    number: t("numeroCivicoName"),
  };
  return (
    <main className={styles.main}>
      <HeroVideo
        typeOfData="image"
        URL={"/image/hero.jpg"}
        data={HeroDataLang}
      />
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
      <AnimatedSection overflowHidden={false}>
        <FormSection />
      </AnimatedSection>
      <AnimatedSection overflowHidden={false}>
        <LeafletMain address={address} />
      </AnimatedSection>
    </main>
  );
}
