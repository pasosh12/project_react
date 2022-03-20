import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";


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

//let AuthRedirectComponent=withAuthRedirect(Dialogs);
let mapStateToProps = (state) => ({state: state.dialogsPage})
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => dispatch(addMessageActionCreator(message)),
        //updateNewMessage: (text) => dispatch(updateNewMessageActionCreator(text))
    }
}
export default compose( withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs) //вокруг какой компоненты. подключаем компоненту dialogs к store

