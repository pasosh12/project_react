import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


// <Route  path='/dialogs' render={()=><Dialogs/>}>

const App = (props) => {
    /*let SomeComponent = () => { <Dialogs/> }*/

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer store={props.store}/>}
                />
                <Route path='/profile'
                       render={() =>
                           <ProfileContainer store={props.store}/>
                       }/>
                <Route path="/friends" render={() => <UsersContainer store={props.store}/>}/>
            </div>
        </div>

    );

}


export default App;
