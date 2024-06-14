import React, { useState, useEffect } from "react";
import "./DarkMode.css";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("selectedTheme") || "light");

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    setTheme("dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    setTheme("light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <SunIcon />
        <MoonIcon />
      </label>
    </div>
  );
};

export default DarkMode;
