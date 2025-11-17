import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  const changeTheme = () => {
    setTheme("Dark");
    console.log("hello");
  };

  return (
    <div>
      <button
        className="p-2 bg-amber-800 rounded m-2 font-bold text-white "
        onClick={changeTheme}
      >
        Change Theme {theme}
      </button>
    </div>
  );
};

export default Button;
