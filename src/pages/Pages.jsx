import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import CardInfo from "./CardInfo";
import Filter from "./Filter";
import Home from "./Home";
import Search from "./Search";

const Pages = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
      <Route path="/country/:country" element={<CardInfo />} />
      <Route path="/search/:search" element={<Search />} />
      <Route path="/filter/:filter" element={<Filter />} />
    </Routes>
  );
};

export default Pages;
