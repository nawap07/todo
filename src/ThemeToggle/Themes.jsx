import { createContext, useContext } from "react";

const ThemeProvider=createContext({
    themBtn:'light',
    onLightMode:()=>{},
    onDarkMode:()=>{}
})

 export const ProviderWrapper=ThemeProvider.Provider;

export default function useTheme(){
    return  useContext(ThemeProvider)
}