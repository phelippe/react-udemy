import React, { Component } from 'react';
import './App.css';

//import styled from 'styled-components';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a', name: "Phe", age: 21 },
      { id: 'b', name: "Lan", age: 19 },
      { id: 'c', name: "Fulana", age: 55 },
    ],
    otherState: 'Some other value here',
    showPersons: false,
    exInput: '',
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  inputChanged = (event) => {
    this.setState({exInput: event.target.value});
  }

  render() {
    const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />;
          })}
        </div>
      );

      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length < 2) {
      classes.push('bold'); // classes = ['bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <hr />
        <button style={btnStyle} onClick={this.togglePersonHandler}>Switch some name</button>
        {persons}
      </div>
    );
  }
}

export default App;
