"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./cookieConsent.module.scss";
import { OPEN_BANNER_EVENT, getConsent, setConsent } from "./consent";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // il banner compare finche' il visitatore non ha fatto una scelta
    if (!getConsent()) {
      setShowBanner(true);
    }
    const open = () => setShowBanner(true);
    window.addEventListener(OPEN_BANNER_EVENT, open);
    return () => window.removeEventListener(OPEN_BANNER_EVENT, open);
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    setConsent("accepted");
  };

  const handleReject = () => {
    setShowBanner(false);
    setConsent("rejected");
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className={style.wrapperCookie}
      role="dialog"
      aria-label="Consenso ai cookie"
    >
      <h2>Questo sito utilizza cookie</h2>
      <p>
        Usiamo cookie tecnici, necessari al funzionamento del sito, e, solo con
        il tuo consenso, cookie analitici di Google Analytics per capire come
        viene usato il sito. Puoi cambiare la tua scelta in qualsiasi momento
        dal link &quot;Preferenze cookie&quot; in fondo alla pagina.{" "}
        <Link href="/it/cookies-and-privacy">Leggi la cookie policy</Link>
      </p>
      <div className={style.buttons}>
        <button onClick={handleReject}>Rifiuta</button>
        <button onClick={handleAccept}>Accetta</button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
