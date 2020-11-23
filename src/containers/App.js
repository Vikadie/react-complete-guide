import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      {id: "id1", name: "Kik", age: 7},
      {id: "id2", name: "Andi", age: 12},
      {id: "id3", name: "Vik", age: 28},
    ],
    otherState: "Bla-bla-bla",
    showPerson: false
  }

  buttonForDeleteHandler = (personIndex) => {
    console.log(this.state.otherState);
    
    const personsNew = [...this.state.persons];
    personsNew.splice(personIndex, 1);
    
    this.setState ( 
      { persons: personsNew } 
    )
  }

  changeNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex( pers => {
      return pers.id === id; });

    //const person = { ...this.state.persons[personIndex] }; 
    // ...to distribute all the properties of this person. Alternative:
    //const person = Object.assign({}, this.state.persons[personIndex]);

    const personsNew = [...this.state.persons];
    personsNew[personIndex].name = event.target.value;

    this.setState({
      persons: personsNew
    })
  }

  showPersonHandler = () => {
    const oppositeShow = this.state.showPerson
    this.setState({ showPerson: !oppositeShow })
  }
  
  render() {    
    let showPers = null;
    let btnClass = '';

    if (this.state.showPerson) {
      showPers = (
        <div>
          {this.state.persons.map( (person, index) => (
            <ErrorBoundary key = {person.id}><Person 
            name={person.name}
            age={person.age}
            click={() => this.buttonForDeleteHandler(index)}
            change={(event) => this.changeNameHandler(event, person.id)}
            /></ErrorBoundary>
          ))}
          {/* <Person 
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
          /> */}
        </div>
        );

        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>Another React line!</p>
        <button className={btnClass}
        onClick={this.showPersonHandler}>Switch name</button>
        { showPers }
      </div>
    );
  }
}

export default App;
