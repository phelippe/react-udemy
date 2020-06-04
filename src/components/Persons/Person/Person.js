import React from 'react';

import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click }>
                <span>I'm {props.name} and I am {props.age} years old!</span> <span>{props.children}</span>
            </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;
