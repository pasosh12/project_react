import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state : {
       dialogsPage: {
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
            newMessageText:'Some Message'
        },
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello!', likescount: 10},
                {id: 2, message: "It's my first Post", likescount: 15}
            ],
            newPostText: 'Some post text'
        }
    },


    _callSubscriber(){
        console.log("State changed");
        },
    getState(){
        return this._state;
        },
    subscribe(observer){
        this._callSubscriber=observer;    // паттерн наблюдатель
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
        this._callSubscriber(this._state);
    },

}

/*window.store=store;*/
export default store;