import React from 'react';
import classes from '../Dialog.module.css';


const Message=(props)=>{
    return(
        <div>
            <div className={classes.message}> {props.message}</div>

        </div>
    );
}


export default Message;