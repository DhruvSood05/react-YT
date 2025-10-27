import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by", title);

    setTitle("");
  };

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
