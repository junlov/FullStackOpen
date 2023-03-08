import React from "react";
import Person from "./Person";

export default function Persons(props) {
  const { personsToShow } = props;

  return (
    <div>
      <ul>
        {personsToShow.map((person) => {
          return (
            <Person
              key={person.name}
              name={person.name}
              number={person.number}
            />
          );
        })}
      </ul>
    </div>
  );
}
