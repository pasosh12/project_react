import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./redux/redux-store";
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";

/*let rerenderEntireTree=()=>{
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree();

store.subscribe(()=>{
    rerenderEntireTree()
});*/

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


/*let dialogs2 = dialogs.map((d) => <Dialogs message={d.dialogs}/> );
let messages2 = messages.map((m) => <Message message={m.message} /> );*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
serviceWorker.unregister();
