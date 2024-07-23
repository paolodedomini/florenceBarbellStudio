import TitleAnimations from "@/components/animations/titleAnimations";
import data from "../../../../public/data/interne/contatti.json";
import style from "./style.module.scss";
function Page() {
  return (
    <main className="interne">
      <TitleAnimations testo={data.titolo} animation="letter" />
      <section>
        <h2>{data.sottotitolo}</h2>
        <div
          className={style.contatti}
          dangerouslySetInnerHTML={{ __html: data.testo1 }}
        />
      </section>
    </main>
  );
}

export default Page;
