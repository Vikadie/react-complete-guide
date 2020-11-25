import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    if (this.state.showPerson) {
      showPers = <Persons 
          persons={this.state.persons}
          clicked={this.buttonForDeleteHandler}
          changed={this.changeNameHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
        title={this.props.appTitle}
        personsLength={this.state.persons.length}
        show={this.state.showPerson}
        isShown={this.showPersonHandler}/>
        { showPers }
      </div>
    );
  }
}

export default App;
