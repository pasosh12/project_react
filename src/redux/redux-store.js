import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./userReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducersBrunch=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer,
    form:formReducer
});
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducersBrunch, /* preloadedState, */ composeEnhancers(
    compose(applyMiddleware(thunk))));
// let store = createStore(reducersBrunch,applyMiddleware(thunk));
window.store=store;
export default store;