"use client";
import Image from "next/image";
import style from "./footer.module.scss";
import { useLocale } from "next-intl";
import LeafletMain from "@/components/map/Leaflet";
type Tdata = {
  it: {
    piva: string;
    pivaNumber: string;
    address: string;
    addressValue: string;
    email: string;
    emailValue: string;
    seguici: string;
    phone: string;
    phoneValue: string;
  };
  en: {
    piva: string;
    pivaNumber: string;
    address: string;
    addressValue: string;
    email: string;
    emailValue: string;
    seguici: string;
    phone: string;
    phoneValue: string;
  };
};

function Footer({ data }: { data: Tdata }) {
  const locale = useLocale();
  const address = {
    street: "Via Pepe",
    number: "47",
    city: "Firenze",
  };

  const footerData = data[locale as keyof typeof data];
  if (!data) {
    return null;
  }
  return (
    <>
      <LeafletMain address={address} />
      <footer className={style.footer}>
        <div className={style.footer__first}>
          <Image
            src="/image/florencebarbellstudiologo.png"
            width={180}
            height={40}
            alt="logo"
          />
          <ul>
            <li>
              {footerData.piva}: {footerData.pivaNumber}
            </li>
            <li>
              {footerData.address}:{footerData.addressValue}
            </li>
            <li>
              {footerData.phone}:{footerData.phoneValue}
            </li>
            <li>
              {footerData.email}:{" "}
              <a href={"mailto:" + footerData.emailValue}>
                {footerData.emailValue}
              </a>
            </li>
          </ul>
        </div>

        <div className={style.footer__fourth}>
          <div className={style.socialIcons}>
            <Image
              src="/image/logofipe-bianco-300x125-1.png"
              width={300}
              height={125}
              alt="logo"
            />
            <Image
              src="/image/CONI-150x150.png"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/image/UNC-150x150.png"
              width={150}
              height={150}
              alt="logo"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
