import React from 'react';
import classes from '../Dialog.module.css';
import {NavLink} from "react-router-dom";


const Dialog_Item = (props) => {
    let path="/dialogs/" + props.id;
    return(
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}> {props.name} </NavLink>

        </div>
    );

}
export default Dialog_Item;