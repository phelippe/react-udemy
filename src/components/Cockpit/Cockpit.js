import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //HTTP Request
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length < 2) {
        assignedClasses.push(classes.bold); // classes = ['bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <hr />
            <button
                className={btnClass} 
                onClick={props.clicked} >Switch some name</button>
        </div>
    );
};

export default cockpit;
