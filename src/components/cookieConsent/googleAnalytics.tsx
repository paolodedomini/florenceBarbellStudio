"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  CONSENT_CHANGE_EVENT,
  clearAnalyticsCookies,
  getConsent,
} from "./consent";

/** carica Google Analytics / Tag Manager solo dopo il consenso ai cookie */
export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const update = () => setAccepted(getConsent() === "accepted");
    update();
    // Analytics puo' riscrivere i suoi cookie mentre la pagina si ricarica dopo "Rifiuta"
    if (getConsent() === "rejected") clearAnalyticsCookies();
    window.addEventListener(CONSENT_CHANGE_EVENT, update);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, update);
  }, []);

  if (!accepted) {
    return null;
  }

  // ID di Google Tag Manager (GTM-...)
  if (GA_MEASUREMENT_ID.startsWith("GTM-")) {
    return (
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    );
  }

  // ID di Google Analytics 4 (G-...)
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}
