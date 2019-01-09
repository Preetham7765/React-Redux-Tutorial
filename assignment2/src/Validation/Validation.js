import React from 'react'


const Validation = (props) => {

    let output = "";

    if(props.textLength < 5) {
        output = "Text is too small";
    }
    else{
        output = "Text is long enough";
    }


    return (

        <p>{output}</p>
    );

}

export default Validation;