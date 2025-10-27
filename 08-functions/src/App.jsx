import React from "react";

const App = () => {
  function btnClicked() {
    console.log("BUtton is clicked");
  }

  function inputChanging(prop) {
    console.log(prop);
  }

  return (
    <>
      <div>
        <input
          onChange={function (elem) {
            inputChanging(elem.target.value);
          }}
          className="bg-gray-200 p-2 m-2 rounded-lg"
          type="text"
          placeholder="Enter you name"
        />
      </div>
    </>
  );
};

export default App;
