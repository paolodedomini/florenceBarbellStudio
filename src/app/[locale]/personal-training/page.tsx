import React from "react";
import data from "../../../../public/data/interne/personalTraining.json";
import TitleAnimations from "@/components/animations/titleAnimations";
import Accordion from "@/components/accordion/accordion";

function PersonalTraining() {
  return (
    <main>
      <TitleAnimations testo={data.titolo} animation="word" />
      <section className="interne">
        <p dangerouslySetInnerHTML={{ __html: data.testo1 }} />
        <Accordion data={data.lista1} />
        <p dangerouslySetInnerHTML={{ __html: data.testo2 }} />
        <Accordion data={data.lista2} />
        <h3 dangerouslySetInnerHTML={{ __html: data.testo3 }} />
        <Accordion data={data.lista3} />
        <div dangerouslySetInnerHTML={{ __html: data.testo4 }} />
        <Accordion data={data.lista4} />
      </section>
    </main>
  );
}

export default PersonalTraining;
