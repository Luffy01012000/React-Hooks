import { NavLink } from "react-router";

interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export default function CounterComponent({
  count,
  increment,
  decrement,
}: Props) {
  const returnfn = () => {
    return function (h: any) {
      console.log(h);
      return h;
    };
  };
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <div style={{ fontSize: "26px" }}>Counter</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "10px",
          fontSize: "26px",
        }}
      >
        <button onClick={() => increment()}>+</button>
        <div>{count}</div>
        <button onClick={decrement}>-</button>
        <button onClick={returnfn()}>-</button>
      </div>
    </>
  );
}
