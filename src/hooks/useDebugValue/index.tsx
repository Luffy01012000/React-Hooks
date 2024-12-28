import { useState } from "react";
import { useLocalStorage } from "./customHook/customHook";

const index = () => {
  const [firstName, setFirstName] = useLocalStorage("firstName", "Kyla");
  const [lastName, setLastName] = useState("cook");
  return (
    <>
      <label htmlFor="firstName" style={{ padding: "7px", fontSize: "20px" }}>
        First:
      </label>
      <input
        id="firstName"
        style={{ padding: "7px", fontSize: "20px" }}
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="lastName" style={{ padding: "7px", fontSize: "20px" }}>
        Last:
      </label>
      <input
        id="lastName"
        style={{ padding: "7px", fontSize: "20px" }}
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </>
  );
};

export default index;
