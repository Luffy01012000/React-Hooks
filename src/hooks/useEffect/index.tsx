import { useEffect, useState } from "react";

function index() {
  // use useeffect for subscribe event like websocket, graphql, etc
  const [state, setState] = useState<number>(0);
  const [togglle, setTogglle] = useState<boolean>(false);
  let count = 1;
  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  const toggle = () => {
    setTogglle((prevSate: boolean) => !prevSate);
  };
  useEffect(() => {
    count = state;
    console.log("state:",state,"count:", count);
    // Runs on every re-render
  });
  useEffect(() => {
    count = state;
    console.log("state:",state,"count:", count);
    // Runs only on mount
  },[]);
  // console.log("state0:",state,"count0:", count);
  useEffect(() => {
    count = state;
    console.log("state1:",state,"count1:", count);
    // Runs on count change
  }, [count]);
  useEffect(() => {
    setState(0);
    console.log(state);
  }, [togglle]);
  return (
    <div>
      <button style={{ margin: "10px" }} onClick={increment}>
        +
      </button>
      {state} {count}
      <button style={{ margin: "10px" }} onClick={decrement}>
        -
      </button>
      <button style={{ margin: "10px" }} onClick={toggle}>
        Reset
      </button>
    </div>
  );
}

export { index };
