import React from 'react';
import cla from "./Person.css";

const person = (props) => {
return (
    <div className={cla.Person}>
        <p onClick={props.click} >I'm {props.name}! And I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name} />
    </div>
    );
};

export default person;