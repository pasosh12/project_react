const NEW_MESSAGE_CHANGE='NEW-MESSAGE-CHANGE';
const ADD_MESSAGE='ADD-MESSAGE';

let initialState={
        dialogs: [
            {id: 1, name: "Дима"},
            {id: 2, name: "Саша"},
            {id: 3, name: "Петя"},
            {id: 4, name: "Игорь"},
            {id: 5, name: "Вячеслав"}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'React Cool!'}
        ],
        newMessageText:''

}

const dialogsReducer=(state=initialState, action)=>{

    switch (action.type) {
        case ADD_MESSAGE: {

            let messagesCopy = {
                ...state,
                messages: [...state.messages]
            };
            
            let mas=Object.keys(messagesCopy.messages); // получение массива ключей
            let newId = mas.length; // получение длины массива ключей

            let newMessage = {
                id: ++newId,
                message: messagesCopy.newMessageText
            }

            messagesCopy.newMessageText = '';
            messagesCopy.messages.push(newMessage);

            return messagesCopy;
        }
        case NEW_MESSAGE_CHANGE: {
            return {
                ...state,
                newMessageText : action.message
            }

        }
        default:
            return state;
    }
}

export const addMessageActionCreator=()=>({type: ADD_MESSAGE})


export const updateNewMessageActionCreator=(messageText)=>{
    return {
        type: NEW_MESSAGE_CHANGE,
        message: messageText,
    }
}

export default dialogsReducer;
