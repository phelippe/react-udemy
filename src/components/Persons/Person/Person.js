import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');

        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    <span>I'm {this.props.name} and I am {this.props.age} years old!</span> <span>{this.props.children}</span>
                </p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;
