import { useState, useEffect } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState(false);
  const [filterName, setFilterName] = useState("");

  const personsFetch = () => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  };

  useEffect(personsFetch, []);

  const addPerson = (event) => {
    const person = persons.filter((person) => person.name === newName);

    if (person.length !== 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(e);
  };

  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberInput = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = persons.filter((person) => {
        return person.name.toLowerCase().startsWith(keyword.toLowerCase());
      });

      setFilter(true);
      setFilterName(results);
    } else {
      setFilter(false);
      setFilterName("");
    }
  };

  const personsToShow = filter ? filterName : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />

      <h3>Add New Person</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
        newNumber={newNumber}
        newName={newName}
      />
      <h3>Phone Numbers</h3>
      <div>
        <Persons
          persons={persons}
          filter={filter}
          filterName={filterName}
          personsToShow={personsToShow}
        />
      </div>
    </div>
  );
};

export default App;
