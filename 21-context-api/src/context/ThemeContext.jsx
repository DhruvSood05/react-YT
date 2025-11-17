import React, { useState } from "react";

const ThemeContext = (props) => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <ThemeDataContext.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
