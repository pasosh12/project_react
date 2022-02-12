import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";


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
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessage: (text) => dispatch(updateNewMessageActionCreator(text))
    }
}
const SuperDialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs)) //вокруг какой компоненты. подключаем компоненту dialogs к store

export default SuperDialogsContainer;