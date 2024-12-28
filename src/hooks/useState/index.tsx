import { useState } from "react";

export default function index() {
  const [state, setState] = useState(0);
  const increment = () => {
    setState((ps) => ps + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  return (
    <div>
      <button style={{ margin: "10px" }} onClick={increment}>
        +
      </button>
      {state}
      <button style={{ margin: "10px" }} onClick={decrement}>
        -
      </button>
    </div>
  );
}
