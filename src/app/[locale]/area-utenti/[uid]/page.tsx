import { createClient } from "@/prismicio";
import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import TitleAnimations from "@/components/animations/titleAnimations";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";
import style from "./style.module.scss";
import ImagePreload from "@/components/loaders/imagePreLoad";
import PasswordWrapper from "@/components/passwordWrapper/passwordWrapper";
type tParams = {
  uid: string;
};
type tScheda = { id: string; url: string; name: string };

export default async function Page({ params }: { params: tParams }) {
  const client = createClient();
  const page = await client.getByUID("clienti", params.uid);

  return (
    <main className={style.clienti}>
      <PasswordWrapper password={page.data.password as string}>
        <AnimatedSection width="866px">
          <TitleAnimations
            testo={"Area Riservata"}
            animation="word"
            className={style.NomeCliente}
            once
          />
          <div className={style.dashboard}>
            <div className={style.dashboard__dati}>
              <div className={style.dashboard__dati__nome}>
                <h2>Dati Cliente</h2>
                <p>
                  {page.data.nome} <br /> {page.data.cognome}
                </p>
              </div>
              <div className={style.dashboard__dati__schede}>
                <h2>Allenamenti</h2>
                <ul>
                  {page.data.schede.map((scheda: any, index) => {
                    return (
                      <li key={scheda.scheda.id}>
                        <a href={scheda.scheda.url}>{scheda.scheda.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </PasswordWrapper>
    </main>
  );
}
