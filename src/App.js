import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

// <Route  path='/dialogs' render={()=><Dialogs/>}>

const App = (props) => {
    /*let SomeComponent = () => { <Dialogs/> }*/

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
                <Route path='/profile/:userId?'
                       render={() =>
                           <ProfileContainer/>
                       }/>
                <Route path='/friends'
                       render={() =>
                           <UsersContainer/>}/>
                <Route path='/login'
                       render={() =>
                           <LoginPage/>
                       }
                       />

            </div>
        </div>

    );

}


export default App;
