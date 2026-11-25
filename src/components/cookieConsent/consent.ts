import cookie from "js-cookie";

export type Consent = "accepted" | "rejected" | undefined;

const COOKIE_NAME = "cookieConsent";
// evento per avvisare i componenti che la scelta e' cambiata
export const CONSENT_CHANGE_EVENT = "cookieConsentChange";
// evento per riaprire il banner (link "Preferenze cookie" nel footer)
export const OPEN_BANNER_EVENT = "cookieConsentOpen";

export function getConsent(): Consent {
  const value = cookie.get(COOKIE_NAME);
  return value === "accepted" || value === "rejected" ? value : undefined;
}

export function setConsent(value: "accepted" | "rejected") {
  const previous = getConsent();
  cookie.set(COOKIE_NAME, value, { expires: 180 });

  if (value === "rejected") {
    clearAnalyticsCookies();
    // gli script di Analytics gia' caricati si fermano solo ricaricando la pagina
    if (previous === "accepted") window.location.reload();
  }

  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

/** cancella i cookie di Google Analytics gia' salvati */
export function clearAnalyticsCookies() {
  const domain = `.${window.location.hostname.replace(/^www\./, "")}`;
  Object.keys(cookie.get()).forEach((name) => {
    if (name.startsWith("_ga") || name.startsWith("_gid")) {
      cookie.remove(name, { path: "/" });
      cookie.remove(name, { path: "/", domain });
    }
  });
}

export function openCookieBanner() {
  window.dispatchEvent(new Event(OPEN_BANNER_EVENT));
}
