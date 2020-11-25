import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if (props.show){
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1){
      assignedClasses.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Another React line!</p>
            <button 
                className={btnClass}
                onClick={props.isShown}>Switch name</button>
        </div>
    );
}

export default React.memo(cockpit);