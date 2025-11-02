import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-amber-900 w-full text-white flex justify-between p-4">
      <h3 className=" font-extrabold text-3xl px-2">Coding School</h3>
      <div className=" gap-5 flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
