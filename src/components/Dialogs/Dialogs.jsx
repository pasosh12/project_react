import React from "react";
import classes from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from 'redux-form';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} placeholder="Enter your message"
                   name="newMessage" />
            <button value="отправить">Send</button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:"addMessage"})(AddMessageForm);

const Dialogs = (props) => {
    let tempState=props.state;
    let dialogsElement = tempState.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElement = tempState.messages.map(m => <Message id={m.id} message={m.message}/>);

    let handleSubmit = (value) => {
        props.addMessage(value.newMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_item}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <AddMessageFormRedux onSubmit={handleSubmit}/>
            </div>
        </div>
    );
}


export default Dialogs;