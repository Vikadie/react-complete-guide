import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backGroundColour: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let showPers = null;

    if (this.state.showPerson) {
      showPers = (
        <div>
          {this.state.persons.map( (person, index) => (
            <Person 
            name={person.name}
            age={person.age}
            click={() => this.buttonForDeleteHandler(index)}
            change={(event) => this.changeNameHandler(event, person.id)}
            key = {person.id}
            />
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
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Another React line!</p>
        <button className="button"
        style={style}
        onClick={this.showPersonHandler}>Switch name</button>
        { showPers }
      </div>
    );
  }
}

export default App;
