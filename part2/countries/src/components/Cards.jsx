import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const { countries, filterBool, filterName } = props;
  const countriesToShow = filterBool ? filterName : countries;

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-7">
        {countries !== null
          ? countriesToShow.map((country) => <Card country={country} />)
          : null}
      </ul>
    </div>
  );
};

export default Cards;
