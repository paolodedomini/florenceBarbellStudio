import { promises as fs } from "fs";
import { Oswald, Outfit } from "next/font/google";
import "@/sass/all.scss";
import SmoothScrolling from "@/components/scroll/smoothScrolling";
import JsonldMetaData from "@/components/metaData/jsonldmetadata";

import Nav from "@/components/mainLayoutComponents/nav/nav";
import { locales } from "../../configTranslations";
import { unstable_setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/mainLayoutComponents/footer/footer";
import footerData from "../../../public/data/footer.json";
import CookieConsentBanner from "@/components/cookieConsent/cookieConsent";
import ScrollTop from "@/components/scroll/scrollToTop";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-oswald",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-outfit",
  display: "swap",
});

/** FUNZIONE NEXT PER STATICIZZARE LE PAGINE CON NEXT-INTL */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
/** FUNZIONE NEXT PER INSERIRE I METADATA NELL' HEAD */
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  //LETTURA FILE JSON DA FILE SYSTEM
  const fileMeta = await fs.readFile(
    process.cwd() + "/public/data/metadata/meta-home.json",
    "utf8"
  );
  const meta = JSON.parse(fileMeta);

  const data = meta[locale as keyof typeof meta].metaHtml;
  if (data === undefined) {
    return {
      title: "Florence Barbell Studio",
      description: "Florence Barbell Studio",
    };
  }
  return data;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(params.locale);
  const messages = await getMessages();
  //LETTURA FILE JSON DA FILE SYSTEM
  const fileMeta = await fs.readFile(
    process.cwd() + "/public/data/metadata/meta-home.json",
    "utf8"
  );
  const meta = JSON.parse(fileMeta);

  return (
    <html lang="it">
      <head>
        {/* COMPONENTE PER INSERIRE I META JSONLD PER GOOGLE  */}
        <JsonldMetaData metadata={meta} />
        <link rel="icon" href="/image/favicon.ico" />
      </head>
      <body className={`${oswald.variable} ${outfit.variable}`}>
        <CookieConsentBanner />
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          <Nav />
          <SmoothScrolling>{children}</SmoothScrolling>
          <Footer data={footerData} />
          <ScrollTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
