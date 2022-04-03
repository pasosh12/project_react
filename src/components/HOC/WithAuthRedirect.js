import React from 'react';
// import Redirect from ;
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const  withAuthRedirect = (Component) => {
    let AuthRedirectComponent = (props) => {
        if (!props.isLogged) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }
    let mapStateToPropsRedirect = (state) => ({isLogged: state.auth.isLogged})
    let ConnectedAuthRedirectComponent=connect(mapStateToPropsRedirect)(AuthRedirectComponent);
    return ConnectedAuthRedirectComponent;
}
