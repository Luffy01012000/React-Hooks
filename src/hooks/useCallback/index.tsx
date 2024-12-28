import { ChangeEvent, useCallback, useMemo, useState } from "react";
import List from "./components/child";

const index = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);

  //   with useCallback we can pass the fn reference
  const getItems = useCallback(
    (n: number) => {
      return [number, number + n, number + 2];
    },
    [number]
  );

  //   with useMemo we can pass the fn return value
  //   const getItems = useMemo(() => {
  //     return () => [number, number + 1, number + 2];
  //   }, [number]);
  //   const getItems = useMemo(() => {
  //     return  [number, number + 1, number + 2];
  //   }, [number]);

  const themeStyle = {
    backgroundColor: dark ? "#444" : "white",
    color: dark ? "white" : "black",
  };
  const theme = {
    padding: "20px",
    marginLeft: "20px",
  };
  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNumber(parseInt(e?.target?.value))
        }
      />
      {/* <br /> */}
      <button style={theme} onClick={() => setDark((prev) => !prev)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default index;
