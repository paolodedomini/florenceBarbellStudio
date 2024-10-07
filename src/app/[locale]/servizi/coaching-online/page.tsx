import data from "../../../../../public/data/interne/coachingOnline.json";
import TitleAnimations from "@/components/animations/titleAnimations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: data.titolo,
};
function CoachingOnline() {
  return (
    <main className="interne">
      <TitleAnimations testo={data.titolo} animation="word" isMainTitle once />
      <section>
        <div dangerouslySetInnerHTML={{ __html: data.testo1 }} />
      </section>
    </main>
  );
}

export default CoachingOnline;
