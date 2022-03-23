import React from 'react';
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

export const  withAuthRedirect = (Component) => {
    let AuthRedirectComponent = (props) => {
        if (!props.isLogged) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }
    let mapStateToPropsRedirect = (state) => ({isLogged: state.auth.isLogged})
    let ConnectedAuthRedirectComponent=connect(mapStateToPropsRedirect)(AuthRedirectComponent);
    return ConnectedAuthRedirectComponent;
}
