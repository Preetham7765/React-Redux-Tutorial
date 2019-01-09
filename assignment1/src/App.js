import React, { Component } from 'react';
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOuptut/UserOuput"
import './App.css';

class App extends Component {
  state = {
    userName : "Preetham"
  }
  
  userNameChangedHandler = (event) => {

    this.setState({
      userName: event.target.value
    });

  }

  render() {
    return (
      <div className = "App">
        User input: <UserInput change= {this.userNameChangedHandler} userName = {this.state.userName}/>
        {/* <button onClick= {this.userNameClickHandler}>Click me to change user name</button> */}
        <UserOutput userName = {this.state.userName}/>
      </div>
    );
  }
}

export default App;
