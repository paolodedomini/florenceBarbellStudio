import React from "react";
import data from "../../../../../public/data/interne/valutazioneFunzionale.json";
import TitleAnimations from "@/components/animations/titleAnimations";
import Accordion from "@/components/accordion/accordion";

function ValutazioneFunzionale() {
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

export default ValutazioneFunzionale;
