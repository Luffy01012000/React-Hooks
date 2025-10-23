import { Component, createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import ThemeContext, { useTheme, useThemeUpdate } from "../../components/ThemeContext";

interface GlobalStateContextType {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}
const GlobalStateContext = createContext<GlobalStateContextType | null>(null);

export const index: React.FC = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
    <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
      <p>Context</p>
      <ChildToggle />
      <ChildDisplay />
      <ClassContextComponent/>
    </GlobalStateContext.Provider>
    <ThemeContext>
      <ThemeFC/>
    </ThemeContext>
    </div>
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

class ClassContextComponent extends Component {
  // constructor()
  themeStyle(dark: boolean|undefined){
    return {
      backgroundColor: dark? '#333':'#ccc',
      color: dark? '#ccc': '#333',
      padding: '2rem',
      margin: '2rem',
    }
  }

  render(){
    return (
      <GlobalStateContext.Consumer >
        {themeContext => {
          return (<div style={this.themeStyle(themeContext?.isToggle)}>
            Class Theme
          </div>)
        }}
      </GlobalStateContext.Consumer>
    )
  }
}

const ThemeFC = ()=>{
  const themeUpdate = useThemeUpdate()
  const theme = useTheme()
  const themeStyle =(dark: boolean|undefined)=>{
    return {
      backgroundColor: dark? '#333':'#ccc',
      color: dark? '#ccc': '#333',
      padding: '2rem',
      margin: '2rem',
    }
  }
  return (
    <div>
      <button onClick={themeUpdate?.toggleTheme}>
        toggle
      </button>
    {<div style={themeStyle(theme?.isToggle)}>
            Custom Theme
          </div>}
    </div>
  )
}