import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
// import Cards from "../components/Cards";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { ThemeContext } from "../ThemeContext";
// import Card from "./Card";

const CardInfo = () => {
  const [data, setData] = useState([]);
  const { theme, setTheme } = useContext(ThemeContext);
  let parms = useParams();
  let navigate = useNavigate();
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v2/name/${parms.country}?fullText=true`
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parms.country]);
  console.log(data);
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="info">
        <div
          className="backbtn"
          onClick={() => {
            navigate(-1);
          }}
        >
          <HiOutlineArrowNarrowLeft
            style={{
              fontSize: "25px",
              marginRight: ".5rem",
            }}
          />
          Back
        </div>
      </div>
      {data.map((info) => (
        <div className="information">
          <div className="flag-img">
            <picture>
              <img src={info.flag} alt={info.name} />
            </picture>
          </div>
          <div className="name">
            <h1>{info.name}</h1>
          </div>
          <div className="detail-1">
            <h3>Native Name: {info.nativeName}</h3>
            <h3>Population: {info.population}</h3>
            <h3>Region: {info.region}</h3>
            <h3>Sub Region: {info.subregion}</h3>
            <h3>Capital: {info.capital}</h3>
          </div>
          <div className="detail-2">
            <h3>Top Level Domain: {info.topLevelDomain}</h3>
            <h3>
              Currencies: {info.currencies[0].name}
              {"("}
              {info.currencies[0].symbol}
              {")"}
            </h3>
            <h3 className="langs">
              Languages:
              {info.languages.map((lang, index) => (
                <h3
                  style={{
                    fontSize: "16px",
                    margin: "0rem 0rem 0rem 0.1rem",
                  }}
                >
                  {index ? "," : " "}
                  {lang.name}
                </h3>
              ))}
            </h3>
          </div>

          <div className="border-countries">
            <h1
              style={{
                fontSize: "15px",
                marginRight: ".5rem",
              }}
            >
              Border Countries:
            </h1>

            {info.borders &&
              info.borders.map((border) => (
                <div className="border">{border}</div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CardInfo;
