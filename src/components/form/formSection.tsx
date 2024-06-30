"use client";
import { useRef } from "react";
import style from "./form.module.scss";
import Form from "./netlifyForm";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

function FormSection() {
  const wrapperForm = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperForm,
    offset: ["start end", "end start"],
  });

  const animationImage = useTransform(scrollYProgress, [0, 0.5], [-100, 100]);

  return (
    <div className={style.wrapperForm} ref={wrapperForm}>
      <header>
        <div className={style.headingContent}>
          <h2>CONTATTACI</h2>
          <p>
            Hai bisogno di informazioni, vuoi prenotare un appuntamento?
            Scrivici e ti risponderemo in tempi brevi!
          </p>
        </div>
      </header>
      <div className={style.formContent}>
        <Form />
        <motion.div
          style={{
            position: "relative",
            y: animationImage,
          }}
        >
          <Image
            src="/image/formContatti.png"
            alt="test"
            width="739"
            height="793"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default FormSection;
