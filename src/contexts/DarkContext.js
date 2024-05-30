import { createContext } from "react";

const DarkContext = createContext({
  darkMode: null,
  changeMode: () => {}
});

export default DarkContext;