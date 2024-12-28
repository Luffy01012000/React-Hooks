import { createRef, useEffect, useRef, useState } from "react";

export default function Index() {
  const onClick = () => {
    if (inputRef?.current?.value) inputRef.current.value = "goku";
    inputRef?.current?.focus();
    console.log(inputRef?.current?.value);
  };
  const onClick1 = () => {
    if (inputCreateRef?.current?.value) inputCreateRef.current.value = "Luffy";
    inputCreateRef?.current?.focus();
    console.log(inputCreateRef?.current?.value);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const inputCreateRef = createRef<HTMLInputElement>();
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);
  useEffect(() => {
    previousCount.current = count;
    console.log("re-rendered!");
  }, [count]);
  return (
    <>
      <div>
        <div>
          <p>Count: {count}</p>
          <p>PreviousCount: {previousCount.current}</p>
          <button onClick={() => setCount((prev) => prev + 1)}>
            increment
          </button>
        </div>
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          <input ref={inputCreateRef} type="text" />
          <button style={{ marginLeft: "20px" }} onClick={onClick1}>
            clg1
          </button>
        </div>
        <div>
          <input ref={inputRef} type="text" />
          <button style={{ marginLeft: "20px" }} onClick={onClick}>
            clg
          </button>
        </div>
      </div>
    </>
  );
}
