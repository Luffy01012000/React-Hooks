import { ChangeEvent, type FC, useEffect, useMemo, useState } from "react";

const index: FC = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  //   Without useMemo
  //   const doubleNumber = slowFunction(number);
  //   With useMemo
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  useEffect(() => {
    console.log("re-rendered");
  });

  return (
    <>
      <input
        style={{ marginRight: "20px" }}
        type="number"
        value={number}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNumber(parseInt(e.target.value))
        }
      />
      <button onClick={() => setDark((prev) => !prev)}>
        Dark:{dark ? "ON" : "OFF"}
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
};

export default index;

function slowFunction(num: number) {
  console.log(num);
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
