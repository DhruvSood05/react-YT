import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    setData(response.data);
  };
  return (
    <div className="flex flex-col">
      <button onClick={getData}>Get Data</button>
      <div className="">
        {data.map(function (elem, idx) {
          return (
            <div>
              <h3>
                Hello, {elem.author} {idx}{" "}
              </h3>
              ;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
