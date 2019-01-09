import React from "react"

// create a component
const userInput = (props) => {

    return (
        <input onChange = {props.change} value= {props.userName}></input>
    );
}

export default userInput;