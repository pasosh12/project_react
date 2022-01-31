import {createStore, combineReducers, applyMiddleware} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./userReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let reducersBrunch=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
});

let store = createStore(reducersBrunch,applyMiddleware(thunk));
window.store=store;
export default store;