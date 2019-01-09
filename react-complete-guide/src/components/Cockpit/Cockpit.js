import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    let assign_classes = [];
    let btnClass = classes.Button;

    if(props.showPersons)
        btnClass = [classes.Button, classes.Red].join(" ");

    if(props.persons.length <= 2)
      assign_classes.push(classes.red);

    if(props.persons.length <= 1)
      assign_classes.push(classes.bold);    

    return (
        <Aux>
            <h1>Hello World! Welcome to React</h1>
            <p className = {assign_classes.join(' ')}>{props.title}</p>
            <button className = {btnClass} onClick = {props.togglePersons}>Toggle Person </button>
        </Aux>
    );
}

export default cockpit;