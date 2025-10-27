import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  return (
    <div className=" min-h-screen w-full bg-[#1e1e1e] flex justify-center items-center flex-col">
      <div className="h-[500px] p-12  justify-evenly items-center flex flex-col bg-gray-950 rounded-2xl">
        <h1 className="text-5xl font-extrabold text-white">
          Value of num is {num}
        </h1>
        <div className=" flex items-end justify-between gap-2">
          <button
            className="m-2 bg-gray-600 p-1.5 rounded-lg text-white font-bold text-4xl"
            onClick={increaseNum}
          >
            Increase
          </button>
          <button
            className="m-2 bg-gray-600 p-1.5 rounded-lg text-white font-bold text-4xl"
            onClick={decreaseNum}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
