"use client";
import { useEffect, useState, useRef } from "react";
import style from "./tabs.module.scss";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

type Tdata = {
  titolo: string;
  testo: string;
  image: string;
  link?: string;
};

function TabNav({
  data,
  activeTab,
  setActiveTab,
}: {
  data: Tdata[] | undefined;
  activeTab?: number | undefined;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  function getListData(data: Tdata[]) {
    return data.map((item: Tdata, index: number) => {
      return (
        <li
          onClick={() => {
            setActiveTab(index);
          }}
          key={index}
          className={`${activeTab === index ? style.active : ""}`}
        >
          {item.titolo}
        </li>
      );
    });
  }

  return (
    <div className={style.tabNav}>
      <ul>{data && getListData(data)}</ul>
    </div>
  );
}

function TabBody({ tabData }: { tabData: Tdata | undefined }) {
  return (
    <AnimatePresence mode="wait">
      {tabData && (
        <motion.div
          key={tabData.titolo}
          className={style.tabBody}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {tabData?.image ? (
            <motion.div
              className={style.tabBody__image}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <Image
                src={tabData.image}
                alt={tabData?.titolo}
                layout="fill"
                quality={100}
              />
            </motion.div>
          ) : (
            <div>no image</div>
          )}
          <div className={style.tabBody__content}>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              {tabData?.titolo}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              dangerouslySetInnerHTML={{ __html: tabData?.testo }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Tabs({ data }: { data: Tdata[] | undefined }) {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState<Tdata | undefined>(
    data && data[activeTab]
  );
  const wrapper = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "start start"],
  });

  const scrollingImmagine = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setTabData(data && data[activeTab]);
  }, [activeTab]);

  if (!data) return null;
  return (
    <div className={style.tabs} ref={wrapper}>
      <TabNav data={data} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabBody tabData={tabData} />
      <motion.div
        className={"macchia"}
        style={{
          position: "absolute",
          y: scrollingImmagine,
          top: "0",
          left: "-36px",
          zIndex: -1,
        }}
      >
        <Image
          src={"/image/macchia1.jpg"}
          alt="macchia"
          width={260}
          height={680}
        />
      </motion.div>
    </div>
  );
}

export default Tabs;
