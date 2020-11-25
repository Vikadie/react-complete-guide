import React, { Component } from 'react';
import cla from "./Person.css";

class Person extends Component{
    render() {
        return (
            <div className={cla.Person}>
                <p onClick={this.props.click} >I'm {this.props.name}! And I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        );
    }
};

export default Person;