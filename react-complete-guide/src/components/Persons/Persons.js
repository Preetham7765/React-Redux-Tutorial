import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return this.props.persons.map((person) => { 
            return (<Person
                    click = {() => this.props.clicked(person.id)} 
                    name = {person.name} 
                    age = {person.age} 
                    changed = {(event) => this.props.changed(event, person.id)}
                    key = {person.id}/> );
            });
    }


}


export default Persons;