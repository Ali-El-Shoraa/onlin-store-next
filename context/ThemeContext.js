"use client";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("darkMode");

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div className={`${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
