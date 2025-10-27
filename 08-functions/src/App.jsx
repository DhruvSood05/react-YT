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
      <div></div>
    </>
  );
};

export default App;
