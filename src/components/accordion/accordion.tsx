"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "./accordion.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type Tdata = {
  titolo: string;
  testo: string;
};
function Accordion({ data }: { data: Tdata[] }) {
  const [active, setActive] = useState<number | null>(null);
  console.log(active);
  return (
    <ul className={"accordion"}>
      {data.map((item, index) => {
        return (
          <li key={item.titolo}>
            <h3
              className="accordion__title"
              onClick={() =>
                setActive((prev) => (prev != index ? index : null))
              }
            >
              {active === index ? <FiChevronUp /> : <FiChevronDown />}
              {item.titolo}
            </h3>
            <motion.div
              className="accordion__content"
              style={{ overflow: "hidden" }}
              dangerouslySetInnerHTML={{ __html: item.testo }}
              initial={{ height: 0 }}
              animate={{ height: active === index ? "auto" : 0 }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Accordion;
