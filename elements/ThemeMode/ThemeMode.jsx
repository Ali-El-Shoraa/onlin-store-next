"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeMode() {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <div className="container-switch">
      <FaSun size={18} onClick={() => setMode("lightMode")} />
      <FaMoon size={18} onClick={() => setMode("darkMode")} />
      {mode === "darkMode" ? (
        <div className="switch right"></div>
      ) : (
        <div className="switch left"></div>
      )}
    </div>
  );
}
