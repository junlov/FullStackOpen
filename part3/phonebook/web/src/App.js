import { useState, useEffect } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import phoneBookService from "./Services/phonebook";
import Notification from "./Components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [successNotification, setSuccessNotification] = useState(null);
  const [errorNotification, setErrorNotification] = useState(null);

  useEffect(() => {
    phoneBookService.getAll().then((response) => setPersons(response));
  }, []);

  const addPerson = (event) => {
    const person = persons.filter((person) => person.name === newName);

    if (person.length !== 0) {
      console.log("addPerson", person[0].id);
      const contactQuery = window.confirm(
        "Do you want to update this contact number?"
      );

      if (contactQuery === true) {
        phoneBookService.updateNum(person[0].id, newNumber).then(() => {
          setPersons(
            persons.map((person) =>
              person.name === newName
                ? { ...person, number: newNumber }
                : { ...person }
            )
          );
        });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      phoneBookService
        .create(personObject)
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
          setNewName("");
          setNewNumber("");
          setSuccessNotification(newPerson.name);
        })
        .then(() => {
          setTimeout(() => setSuccessNotification(null), 5000);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(e);
  };

  // This function sets the state of newName to the value of the input field of the person form
  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };

  // This function sets the state of the newNumber to the value of the input field of the person form
  const handleNumberInput = (e) => {
    setNewNumber(e.target.value);
  };

  // This function filters any keys that are written within the Filter component and sets Filter to either true or false based on value of the input field
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

  const handleDelete = (id) => {
    const deleteQuery = window.confirm(
      `Are you sure you want to delete ${id}?`
    );

    if (deleteQuery === true) {
      const pushDel = (id) => phoneBookService.delete_(id);
      pushDel(id);
    } else {
      return null;
    }
  };

  const personsToShow = filter ? filterName : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification success={successNotification} error={errorNotification} />
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
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
