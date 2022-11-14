import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
const Filter = () => {
  const [data, setData] = useState([]);
  const parms = useParams();

  const fetchData = async () => {
    const res = await axios.get(
      `https://restcountries.com/v2/region/${parms.filter}`
    );
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, [parms.filter]);

  console.log(data);
  return (
    <>
      <Cards data={data} />
    </>
  );
};

export default Filter;
