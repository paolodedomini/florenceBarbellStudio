import data from "../../../../../public/data/interne/pesisticaOlimpica.json";
import TitleAnimations from "@/components/animations/titleAnimations";
import Accordion from "@/components/accordion/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: data.titolo,
};
function PesisticaOlimpica() {
  return (
    <main className="interne">
      <TitleAnimations testo={data.titolo} animation="word" isMainTitle once />
      <section>
        <div dangerouslySetInnerHTML={{ __html: data.testo1 }} />
        <Accordion data={data.lista1} />
      </section>
    </main>
  );
}

export default PesisticaOlimpica;
