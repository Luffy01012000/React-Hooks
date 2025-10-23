import { createContext, useContext, useState } from "react";
import type { ReactNode, } from "react";

interface ThemeStateContextType {
  isToggle: boolean;
}
interface ToggleThemeStateContextType {
  toggleTheme: ()=> void
}

const ThemeStateContext = createContext<ThemeStateContextType | null>(null);
const ToggleThemeStateContext = createContext<ToggleThemeStateContextType | null>(null);

export function useTheme(){
 return useContext(ThemeStateContext);
}

export function useThemeUpdate(){
 return useContext(ToggleThemeStateContext);
}

const ThemeContext = ({children}:{children: ReactNode}) => {
    const [isToggle, setIsToggle] = useState(false);
    const toggleTheme = ()=>{
        setIsToggle(prevState=>!prevState)
    }
  return (
    <ThemeStateContext.Provider value={{isToggle}}>
        <ToggleThemeStateContext value={{toggleTheme}}>
        {children}
        </ToggleThemeStateContext>
    </ThemeStateContext.Provider>
  )
}

export default ThemeContext