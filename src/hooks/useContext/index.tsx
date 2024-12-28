import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface GlobalStateContextType {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}
const GlobalStateContext = createContext<GlobalStateContextType | null>(null);

export const index: React.FC = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
      <p>Context</p>
      <ChildToggle />
      <ChildDisplay />
    </GlobalStateContext.Provider>
  );
};

const ChildToggle = () =>
  // {
  //   setIsToggle,
  // }: {
  //   setIsToggle: Dispatch<SetStateAction<boolean>>;
  // }
  {
    const Context = useContext(GlobalStateContext);
    if (!Context) return <h1>Something went wrong!</h1>;
    const { setIsToggle } = Context;
    return (
      <div>
        <button onClick={() => setIsToggle((prev: boolean) => !prev)}>
          Toggle State
        </button>
      </div>
    );
  };

const ChildDisplay = () =>
  // { isToggle }: { isToggle: boolean }
  {
    const Context = useContext(GlobalStateContext);
    if (!Context) return <h1>Something went wrong!</h1>;
    const { isToggle } = Context;
    return (
      <div>
        <p>Current State:{isToggle ? "ON" : "OFF"}</p>
      </div>
    );
  };
