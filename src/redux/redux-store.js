import {createStore, combineReducers} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./userReducer";
import authReducer from "./authReducer";

let reducersBrunch=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
});

let store = createStore(reducersBrunch);
window.store=store;
export default store;