import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

    state = {
      text: ''
    };


  InputChangeHandler = (event) => {
      let text = this.state.text;
      text = event.target.value
      this.setState({text: text});

  }

  deleteCharacter = (index) => {
      let textArr = this.state.text.split("");
      textArr.splice(index, 1);

      const text = textArr.join('');
      this.setState({text:text});
  }

  render() {
    let characters = null;
    characters = (
      <div>
        {
          this.state.text.split("").map( (character, index) => {
          return <Char 
              character = {character} 
              click = {() => this.deleteCharacter(index)}
              key = {index}
              />
          })
        }
      </div>  
    ); 

    return (
      <div>
        <input type = 'text' onChange= {(event) => this.InputChangeHandler(event)} value={this.state.text}/>
        <p>{this.state.text}</p>
        <Validation textLength = {this.state.text.length}/> 
          {characters}
      </div>
    );
  }
}

export default App;
