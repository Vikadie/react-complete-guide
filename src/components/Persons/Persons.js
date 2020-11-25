import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons){
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            this.props.persons.map( (person, index) => (
                <ErrorBoundary key = {person.id}>
                    <Person 
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    change={(event) => this.props.changed(event, person.id)} />
                </ErrorBoundary>
                ) ) );
            
              /* <Person 
              name = {this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={() => this.buttonHandler("Vik!!", "Kik!!")}
              //change = {this.changeNameHandler}
              />
              <Person 
              name = {this.state.persons[1].name} 
              age={this.state.persons[1].age}
              change = {this.changeNameHandler}
              >My Hobbies: learning Maths and foreign languages!</Person>
              <Person 
              name = {this.state.persons[2].name} 
              age={this.state.persons[2].age}
              //change = {this.changeNameHandler}
                /> */
            };
        };
    
export default Persons;