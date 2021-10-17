import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog_item= (props) => {
    let path="/dialogs/" + props.id;
    return(
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
}
const Message=(props)=>{
    return(
        <div className={classes.message}>{props.message}</div>
    );
}


const Dialogs = (props)=> {


    let dialogs = [
            {id:1, name:"Дима"},
            {id:2, name:"Саша"},
            {id:3, name:"Петя"},
            {id:4, name:"Игорь"},
            {id:5, name:"Вячеслав"}
            ]

    let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'Hello'},
        {id:3, message:'React Cool!'}
        ]

    let dialogsElement = dialogs.map( d => <Dialog_item id={d.id} name={d.name} /> );


    let messageElement = messages.map( m => <Message id={m.id} message={m.message} /> )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_item}>
                { dialogsElement }
            </div>

            <div className={classes.messages}>
                { messageElement }
            </div>

        </div>
    );
}
export default Dialogs;