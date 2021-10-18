import {createStore, combineReducers} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./userReducer";

let reducersBrunch=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer
});

let store = createStore(reducersBrunch);
window.store=store;
export default store;