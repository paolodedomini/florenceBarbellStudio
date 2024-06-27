import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
import "@/sass/all.scss";
import SmoothScrolling from "@/components/scroll/smoothScrolling";
import JsonldMetaData from "@/components/metaData/jsonldmetadata";
import meta from "../../../public/data/meta-home.json";
import Nav from "@/components/mainLayoutComponents/nav/nav";
import { locales } from "../../configTranslations";
import { unstable_setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-oswald",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-outfit",
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
  const data = meta[locale as keyof typeof meta].metaHtml;
  return data;
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang="en">
      <head>
        {/* COMPONENTE PER INSERIRE I META JSONLD PER GOOGLE  */}
        <JsonldMetaData metadata={meta} />
      </head>
      <body className={`${oswald.variable} ${outfit.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Nav />
          <SmoothScrolling>{children}</SmoothScrolling>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
