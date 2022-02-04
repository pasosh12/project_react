import React from "react";
import classes from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Redirect from "react-router-dom/es/Redirect";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let messageElement = props.state.messages.map( m => <Message id={m.id} message={m.message} /> );
    let newMessage=props.state.newMessageText;

    let messageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    }
    let addMessage = () => props.addMessage()
    if (!props.isLogged) return <Redirect to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_item}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                {messageElement}
                <textarea onChange={messageChange} placeholder={"Enter your message"} value={newMessage}/>
                <button onClick={addMessage} value="отправить">Send</button>
            </div>

        </div>
    );
}
export default Dialogs;