import { useState } from "react";

export default function index() {
  const [state, setState] = useState(0);
  const increment = () => {
    setState((ps) => ps + 1);
    setState((ps) => ps + 1);
  };
  const decrement = () => {
    setState((preState)=>preState - 1);
    setState((preState)=>preState - 1);
    // below setState overwrite the above setState - decrement by 1
    setState(state - 1);
    // setState(state - 1);
    // setState(state - 1);
    // setState(state - 1);
    // setState(state - 1);
  };

  return (
    <div>
      <button style={{ margin: "10px" }} onClick={increment}>
        + by 2x
      </button>
      {state}
      <button style={{ margin: "10px" }} onClick={decrement}>
        - by 2x
      </button>
    </div>
  );
}
