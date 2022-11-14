import React, { useContext } from "react";
import Card from "../pages/Card";
import Home from "../pages/Home";
import { ThemeContext } from "../ThemeContext";

const Cards = ({ data }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <Home theme={theme} setTheme={setTheme} />
      <div className="cards">
        {data.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </>
  );
};

export default Cards;
