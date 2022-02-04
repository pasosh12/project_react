import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";


/*const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState().dialogsPage;

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text));
                }
                let onAddMessage = () => store.dispatch(addMessageActionCreator())
                return <Dialogs state={state} addMessage={onAddMessage} updateNewMessage={onMessageChange}/>

            }
        }
    </StoreContext.Consumer>
}*/

let mapStateToProps = (state) => {
    console.log(state);
    return {
        state: state.dialogsPage,
        isLogged:state.auth.isLogged,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessage: (text) => dispatch(updateNewMessageActionCreator(text))
    }
}
const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) //вокруг какой компоненты. подключаем компоненту dialogs к store

export default SuperDialogsContainer;