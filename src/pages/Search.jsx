import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
// import Card from "./Card";

const Search = () => {
  const [data, setData] = useState([]);

  const parms = useParams();

  const fetchDataOnSearch = async () => {
    const res = await axios.get(
      `https://restcountries.com/v2/name/${parms.search}`
    );
    setData(res.data);
  };
  useEffect(() => {
    fetchDataOnSearch();
  }, [parms.search]);
  console.log(data);
  return (
    <>
      <Cards data={data} />
    </>
  );
};

export default Search;
