import React, { Component } from 'react';
import withClasses from '../../../HOC/withClasses';
import Auxiliary from '../../../HOC/Auxiliary';
import cla from "./Person.css";

class Person extends Component{
    render() {
        return (
            // <div className={cla.Person}> can be replaced by <React.Fragment> which also allows us to render more
            // than 1 element next to each other, same as a list or wrapper as Higher Order Component Auxiliary which should be
            // placed in `Auxiliary.js`, imported and have inside `const auxiliary = props => props.children;` + export default below
            <Auxiliary>
                <p onClick={this.props.click} >I'm {this.props.name}! And I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </Auxiliary>
            // </div>
        );
    }
};

export default withClasses(Person, cla.Person);