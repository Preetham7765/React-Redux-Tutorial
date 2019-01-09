import React, { Component } from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";
import classes from './App.css'; 
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {


  constructor(props) {
    super(props)
    console.log("Inside App.js constructor", props);
    this.state = {
      persons: [
        {"id": "asdf1", "name":"Max", "age": 20},
        {"id": "hgfg5", "name":"Manu", "age": 30},
        {"id": "nbvnv4", "name":"Miller", "age": 40}
      ],
      showPersons: true
    };
  }


  togglePersonsHandler = () => {
    const personsShow = this.state.showPersons;
    this.setState({showPersons: !personsShow });
  }

  nameChangeHandler = (event, personId) => {

    let personIndex = this.state.persons.findIndex((person) => {
        return person.id === personId;
    });


    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});


  }

  deletePersonHandler = (personId) => {
    let personIndex = this.state.persons.findIndex((person) => {
      return person.id === personId;
    });

    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({persons: persons});
  }

  render() {

    let persons = null;
    console.log("Inside App.js render");
  

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons= {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler}
          />
        </div>
      ); 

    }

    return (
        <Aux>
        <Cockpit 
          title = {this.props.title}
          persons = {this.state.persons}
          showPersons = {this.state.showPersons}
          togglePersons = {this.togglePersonsHandler}         
        />
        {persons}
        </Aux>
        );
  }

}

export default WithClass(App, classes.App);
