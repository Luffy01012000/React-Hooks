import { useState } from "react";
import NormalForm from "./NormalForm";
import UseActionState from "./UseActionState";

const index = () => {
  const [form, setForm] = useState(false);
  return (
    <>
      {form ? "Normal Form" : "UseActionState Form"}
      <input type="checkbox" onChange={() => setForm((prev) => !prev)} />
      {form ? <NormalForm /> : <UseActionState />}
    </>
  );
};

export default index;
