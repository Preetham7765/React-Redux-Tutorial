import React from "react"

const userOutput = (props) => {

    return (
        <div>
            <p>This is paragraph1. User Input is {props.userName}</p>
            <p>This is paragraph2</p>
        </div>
    );
}

export default userOutput;