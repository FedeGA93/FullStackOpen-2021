import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./Components/Form/Form";
import { Title } from "./Components/Title/Title";
import { Numbers } from "./Components/Persons/Numbers";
import { SearchFilter } from "./Components/SearchFilter/SearchFilter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleNewPerson = (e) => {
    const names = [];
    persons.forEach((person) => {
      names.push(person.name);
    });
    if (!names.includes(newName)) {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    } else {
      alert(`${newName}is already in the Phonebook, try with another name!`);
    }
  };
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };

  const getContacts = () => {
    const results = [];
    persons.filter((person) => {
      const name = person.name;
      if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push(person);
      }
    });
    setSearchList(results);
  };
  const SetContacts = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      response.data.forEach((element) => {
        persons.push(element);
      });
      setPersons(persons);
    });
  };
  useEffect(SetContacts, [persons]);
  useEffect(getContacts, [searchTerm]);
  return (
    <div>
      <Title text={"Phonebook"} />
      <Form
        handleNewName={handleNewName}
        handleNewPerson={handleNewPerson}
        handleNewNumber={handleNewNumber}
      />

      <Title text={"Numbers"} />
      <Numbers person={persons} />
      <SearchFilter handleSearchName={handleSearchTerm} />
      {showSearch ? <Numbers person={searchList} /> : ""}
    </div>
  );
};
export default App;
