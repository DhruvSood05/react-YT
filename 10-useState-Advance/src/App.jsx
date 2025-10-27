import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "Dhruv", Age: 20 });

  const btnClicked = () => {
    setNum((prev) => ({ ...prev, user: "Dhruv Sood" }));
  };

  return (
    <div>
      <h1>
        {num.user} {num.age}
      </h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;
