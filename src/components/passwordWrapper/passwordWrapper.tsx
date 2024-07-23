"use client";
import { useState } from "react";
import Form from "./form";
import style from "./password.module.scss";

function PasswordWrapper({
  children,
  password,
}: {
  children: React.ReactNode;
  password: string;
}) {
  const [checkPassword, setCheckPassword] = useState("");
  console.log(checkPassword, "checkPassword");
  return (
    <>
      {checkPassword === password ? (
        ""
      ) : (
        <div className={style.password}>
          <p>Inserisci la password per accedere alla tua scheda personale</p>
          <Form setPassword={setCheckPassword} />
        </div>
      )}
      {checkPassword === password
        ? children
        : checkPassword.length > 0 && "Password errata"}{" "}
    </>
  );
}

export default PasswordWrapper;
