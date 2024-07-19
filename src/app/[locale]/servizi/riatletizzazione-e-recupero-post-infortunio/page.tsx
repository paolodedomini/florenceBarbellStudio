import data from "../../../../../public/data/interne/riatletizzazioneRecupero.json";
import TitleAnimations from "@/components/animations/titleAnimations";
import Accordion from "@/components/accordion/accordion";

function RiatletizzazioneRecupero() {
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

export default RiatletizzazioneRecupero;
