import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Vik", age: 28},
      {name: "Kik", age: 7},
      {name: "Andi", age: 12},
    ],
    otherState: "Bla-bla-bla" 
  }

  buttonHandler = (newNameV, newNameK) => {
    console.log(this.state.otherState);
    this.setState ( 
      {
      persons: [
        {name: newNameV, age: 40},
        {name: newNameK, age: 7},
        {name: "Andi", age: 12},
      ]
    } 
    )
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: "Vik", age: 40},
        {name: event.target.value, age: 7},
        {name: "Andi", age: 12},
      ]
    })
  }

  render() {
    const style = {
      backGroundColour: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Another React line!</p>
        <button 
        style={style}
        onClick={this.buttonHandler.bind(this, "Viktor!!!", "Kikeriche!!!")}>Switch name</button>
        <Person 
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
        />
      </div>
    );
  }
}

export default App;
