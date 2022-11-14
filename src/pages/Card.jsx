import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <Link to={"/country/" + card.name}>
            <img src={card.flag} alt={card.name} />
          </Link>
        </div>
        <div className="card-info">
          <div className="country-name">{card.name}</div>
          <div className="country-population">
            Population: {card.population}
          </div>
          <div className="country-region">Region: {card.region}</div>
          <div className="country-capital">Capital: {card.capital}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
