import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // path to your context

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Hello, Theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
