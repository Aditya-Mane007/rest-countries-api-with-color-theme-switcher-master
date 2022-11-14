import React from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const navbar = ({ theme, setTheme }) => {
  const changeTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  return (
    <div className="navbar">
      <div className="navabr-title">Where in the world?</div>
      <div
        className="dark-mode"
        onClick={changeTheme}
        style={{ cursor: "pointer" }}
      >
        {theme === "light-theme" ? (
          <BsMoon />
        ) : (
          <BsMoonFill style={{ color: "white" }} />
        )}
        <div className="darkmodetext">
          <span style={{ marginLeft: ".2rem" }}>Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default navbar;
