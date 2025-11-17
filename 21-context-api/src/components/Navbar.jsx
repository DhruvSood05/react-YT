import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  return (
    <div className=" flex bg-sky-700 justify-between items-center px-3 py-5 text-white">
      <h2>Dhruv</h2>
      <Nav2 />
    </div>
  );
};

export default Navbar;
