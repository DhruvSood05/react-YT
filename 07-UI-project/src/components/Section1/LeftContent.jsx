import React from "react";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <>
      <div className=" flex justify-between flex-col h-full w-1/3 ">
        <HeroText />
        <Arrow />
      </div>
    </>
  );
};

export default LeftContent;
