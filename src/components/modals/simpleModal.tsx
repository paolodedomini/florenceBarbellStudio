import React from "react";
import Image from "next/image";
import style from "./modals.module.scss";
import { AnimatePresence, motion } from "framer-motion";

function SimpleModal({
  image,
  title,
  modalState,
  setmodalstate,
}: {
  image: string | null;
  title: string | null;
  modalState: boolean;
  setmodalstate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  console.log("SimpleModal", modalState);
  return (
 <>
        <motion.div
          className={style.simpleModal}
          initial={{
            opacity: 0,
            x: "-100vw",
          }}
          animate={{
            opacity: 1,
            x: "0vw",
          }}
          exit={{
            opacity: 0,
            x: "-100vw",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          onClick={() => setmodalstate(false)}
        >
          <motion.div
            className={style.simpleModal__image}
            initial={{
              opacity: 0,
              x: "-100vw",
            }}
            animate={{
              opacity: 1,
              x: "0vw",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.7,
            }}
          >
            <Image
              src={image || ""}
              alt={title || ""}
              layout={"fill"}
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
   </>
  );
}

export default SimpleModal;
