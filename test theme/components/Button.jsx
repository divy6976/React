import React, { useContext } from "react";
import ThemeContext from "../context/theme"; // ✅ correct

const Button = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const checkcolour = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={checkcolour}
      className="p-2 m-4 rounded bg-blue-500 text-white"
    >
      Toggle Theme (Now: {theme})
    </button>
  );
};

export default Button;
