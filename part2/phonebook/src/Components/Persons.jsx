import React from "react";
import Person from "./Person";

export default function Persons(props) {
  return (
    <div>
      <ul>
        {props.personsToShow.map((person) => {
          return (
            <>
              <Person
                key={person.id}
                name={person.name}
                number={person.number}
                handleDelete={props.handleDelete}
                id={person.id}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
}
