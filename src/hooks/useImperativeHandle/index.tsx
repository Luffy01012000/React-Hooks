import { useRef, type FC } from "react";
import {
  index as CustomRef,
  index1 as CustomRef2,
  InputHandle2,
  type InputHandle,
} from "./component";

const index: FC = () => {
  const inputRef = useRef<InputHandle>(null);
  const inputRef2 = useRef<InputHandle2>(null);
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => inputRef.current?.focusInput()}
        >
          FocusInput
        </button>
        <CustomRef ref={inputRef} />
        <button
          style={{ marginLeft: "20px" }}
          onClick={() => inputRef.current?.clearInput()}
        >
          ClearInput
        </button>
      </div>
      <div>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => inputRef2.current?.focusInput2()}
        >
          FocusInput2 forwardRef
        </button>
        <CustomRef2 ref={inputRef2} />
        <button
          style={{ marginLeft: "20px" }}
          onClick={() => inputRef2.current?.clearInput2()}
        >
          ClearInput2 forwardRef
        </button>
      </div>
    </>
  );
};

export default index;
