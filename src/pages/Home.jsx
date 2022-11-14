import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = ({ theme, setTheme }) => {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Search />
    </>
  );
};

export default Home;
