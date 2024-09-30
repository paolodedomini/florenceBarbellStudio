"use client";
import style from "./staff.module.scss";

import FixedModal from "../modals/fixedModal";
import { useState } from "react";
import ImagePreload from "../loaders/imagePreLoad";

type Tdata = {
  status: string;
  image: string;
  nome: string;
  cognome: string;
  descrizione: string;
  skills: string[];
  ruolo: string;
  cv?: string;
  eta: number;
};
function SingleStaff({ data }: { data: Tdata }) {
  const [openModal, setModal] = useState<boolean>(false);

  return (
    <>
      <li onClick={() => setModal(true)}>
        <div className={style.staff__image}>
          <ImagePreload
            src={data.image}
            alt={data.nome}
            type={"fill"}
            isLazy={true}
          />
        </div>
        <div className={style.staff__nome}>
          {data.status + " " + data.nome + " " + data.cognome}
          <span>{data.ruolo}</span>
        </div>
      </li>
      <FixedModal data={data} modalState={openModal} closeModal={setModal} />
    </>
  );
}

function Staff({ data }: { data: Tdata[] }) {
  return (
    <ul className={style.staff}>
      {data.map((item, index) => {
        return <SingleStaff key={index} data={item} />;
      })}
    </ul>
  );
}

export default Staff;
