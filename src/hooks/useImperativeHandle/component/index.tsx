import { forwardRef, type Ref, useImperativeHandle, useRef } from "react";

export interface InputHandle {
  focusInput: () => void;
  clearInput: () => void;
}
export interface InputHandle2 {
  focusInput2: () => void;
  clearInput2: () => void;
}

export const index = ({ ref }: { ref: Ref<InputHandle> }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef?.current?.focus();
    },
    clearInput: () => {
      if (inputRef?.current && inputRef?.current?.value)
        inputRef.current.value = "";
    },
  }));
  return <input ref={inputRef} type="text" placeholder="Type something" />;
};

export const index1 = forwardRef<InputHandle2>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(props);
  useImperativeHandle(ref, () => ({
    focusInput2: () => {
      inputRef?.current?.focus();
    },
    clearInput2: () => {
      if (inputRef?.current && inputRef?.current?.value)
        inputRef.current.value = "";
    },
  }));
  return <input ref={inputRef} type="text" placeholder="Type something" />;
});

export default index;
