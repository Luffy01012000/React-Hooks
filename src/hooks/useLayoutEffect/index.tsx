import { useEffect, useLayoutEffect, useRef, useState } from "react";

export interface layoutEffect extends HTMLDivElement {
  //   offsetWidth: number;
}

const index = () => {
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxWidthWithUseEffect, setBoxWidthWithUseEffect] = useState(0);
  const boxRef = useRef<layoutEffect>(null);

  useEffect(() => {
    if (boxRef.current) {
      setBoxWidthWithUseEffect(boxRef.current.offsetWidth);
    }
  });

  useLayoutEffect(() => {
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
    }
  });
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          ref={boxRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90px",
            height: "100px",
            backgroundColor: "lightblue",
            color: "#313131",
          }}
        >
          Resize me!
        </div>
      </div>
      <p>The box width useEffect is: {boxWidthWithUseEffect} px</p>
      <p>The box width is: {boxWidth} px</p>
    </>
  );
};

export default index;
