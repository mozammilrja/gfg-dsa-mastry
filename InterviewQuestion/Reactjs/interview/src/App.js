import React, { useState } from "react";
import { ThemeProvider } from "./Components/ContextAPI/ThemeContext";
import ReducerComponent from "./Components/useReducer/ReducerComponent";
import Home from "./Components/ContextAPI/Home";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div
      className="App"
      style={{
        margin: "20rem ,0px,0px,0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
};

export default App;
