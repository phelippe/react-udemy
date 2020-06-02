import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Phe", age: 21 },
      { name: "Lan", age: 19 },
      { name: "Fulana", age: 55 },
    ],
    otherState: 'Some other value here'
  });

  const [otherState, setOtherState] = useState('some othwer value here');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    //Don't do this anymore - this.setState.persons[0].name = "Phelippe";
    setPersonsState({
      persons: [
        { name: "Phelippe", age: 30 },
        { name: "Alanny", age: 28 },
        { name: "Fulana", age: 55 },
      ],
    })
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch some name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Some of my hobbies: Play games, watch series</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
    </div>
  );
}

export default app;
