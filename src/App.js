import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader";
import {SuspenseComponentHOC} from "./components/HOC/WithSuspense";

// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

// <Route  path='/dialogs' render={()=><Dialogs/>}>

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() =>
                               SuspenseComponentHOC(DialogsContainer)
                           }/>
                    <Route path='/profile/:userId?'
                           render={() =>
                               SuspenseComponentHOC(ProfileContainer)
                           }/>
                    <Route path='/friends'
                           render={() =>
                               <UsersContainer/>
                           }/>
                    <Route path='/login'
                           render={() =>
                               <LoginPage/>
                           }
                    />
                </div>
            </div>

        );

    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
})

export default compose(connect(mapStateToProps, {initializeApp})(App));
