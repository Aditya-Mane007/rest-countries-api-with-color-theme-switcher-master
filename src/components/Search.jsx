import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isDropDown, setIsDropDown] = useState(true);

  const navigate = useNavigate();

  const setDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + search);
    setSearch("");
  };
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.path[0].tagName !== "svg") {
        setIsDropDown(true);
      }
    });
  }, [search]);
  return (
    <div className="search-filter-bar">
      <div className="search-box">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            placeholder="search for a country"
            autoComplete="off"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="dropdown" onClick={setDropDown}>
        Filter by Region
        <span className="dropdown-icon">
          {isDropDown ? (
            <MdKeyboardArrowDown style={{ fontSize: "30px" }} />
          ) : (
            <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
          )}
        </span>
        {!isDropDown ? (
          <>
            <div className="dropdownContent">
              <Link to={"/filter/Africa"}>
                <button className="dropdownContenText">Africa</button>
              </Link>
              <Link to={"/filter/Americas"}>
                <button className="dropdownContenText">America</button>
              </Link>
              <Link to={"/filter/Asia"}>
                <button className="dropdownContenText">Asia</button>
              </Link>
              <Link to={"/filter/Europe"}>
                <button className="dropdownContenText">Europe</button>
              </Link>
              <Link to={"/filter/Oceania"}>
                <button className="dropdownContenText">Oceania</button>
              </Link>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
