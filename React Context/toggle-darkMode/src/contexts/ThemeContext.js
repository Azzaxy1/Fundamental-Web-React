import { createContext } from "react";

const ThemeContext = createContext();
console.log(createContext);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
