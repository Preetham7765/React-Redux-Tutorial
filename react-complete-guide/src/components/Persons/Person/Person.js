import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/withClass';

class Person extends Component {
    
    constructor(props) {
        super(props);
        console.log("Inside Person.js constructor", this.props);
    }

    render() {
        return (
            <Aux> 
                <p onClick = {this.props.click}>This is {this.props.name}! I'am {this.props.age} years old. </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
                
        );
    }

}

export default WithClass(Person,classes.Person);