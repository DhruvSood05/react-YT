import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <>
      <div
        id="right"
        className=" h-full overflow-x-auto rounded-4xl flex gap-5 p-6 w-2/3 "
      >
        {props.users.map(function (elem, idx) {
          return (
            <div key={idx}>
              <RightCard id={idx} img={elem.img} tag={elem.tag} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RightContent;
