import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import Cards from "./components/Cards";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [filterBool, setFilterBool] = useState(false);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((country) => {
      setCountries(country.data);
      console.log(country.data);
    });
  }, []);

  const handleFilter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });

      setFilterBool(true);
      setFilterName(results);
    } else {
      setFilterBool(false);
      setFilterName("");
    }
  };

  // TODO: Add useeffect API call and useState toggle function for handling selected cards

  // TODO: Work on component for Selected card and showing more details from API

  // TODO: Get API key for openweather.org

  return (
    <div className="bg-gray-300">
      <Searchbar handleFilter={handleFilter} />
      <Cards
        countries={countries}
        filterName={filterName}
        filterBool={filterBool}
      />
    </div>
  );
};

export default App;
