import TitleAnimations from "../../../components/animations/titleAnimations";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "cookies and privacy",
  description: "Cookie and Privacy policy",
};

function Cookie() {
  return (
    <main>
      <TitleAnimations testo="Cookie and Privacy policy" animation="word" />
      <AnimatedSection width="1300px">
        <p>
          Ai sensi dell’art. 13 dlgs 2003, n. 196 (codice in materia di
          protezione dei dati personali), si informa il gentile utente che:
        </p>
        <ul>
          <li>
            Questo sito utilizza cookie di tipo “analytics”, i quali hanno la
            finalità di raccogliere informazioni, in forma aggregata, sul numero
            degli utenti e su come questi visitano il sito
            www.florencebarbellstudio.it
          </li>
          <li>
            Il sito NON UTILIZZA cookie al fine di inviare messaggi pubblicitari
            (cd “cookie di profilazione”).
          </li>{" "}
          <li>
            Il sito potrebbe utilizzare cookie “terze parti”, ovvero cookie
            inviati da siti o da web server diversi (es Facebook, Linkedin, ecc
            ), sui quali il gestore non è in grado di fornire adeguate
            informative perché non conosciuti direttamente.
          </li>{" "}
          <li>
            I cookie analytics da noi utilizzati sono quelli di google, che
            potrebbero essere soggetti a variazioni non controllabili dal
            gestore.
          </li>
          <li>
            Continuando la navigazione, l’utente presta il consenso all’utilizzo
            dei cookie.
          </li>{" "}
          <li>
            Nessun altro soggetto, ad esclusione del gestore del sito, verrà a
            conoscenza dei dati filtrati attraverso i cookie.
          </li>
          <li>
            L’utente ha diritto di ottenere, ad ogni modo, le indicazioni di cui
            all’art. 7 dlgs 2003, n. 196, nonché di opporsi al trattamento per
            motivi illegittimi ovvero pubblicitari. Il titolare del trattamento
            tramite cookie è il gestore del sito, www.florencebarbellstudio.it
          </li>
        </ul>
      </AnimatedSection>
    </main>
  );
}

export default Cookie;
