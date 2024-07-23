import { useState } from "react";

function Form({
  setPassword,
}: {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [pass, setPass] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => setPass(e.target.value)}
      />{" "}
      <button
        onClick={() => {
          setPassword(pass);
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
