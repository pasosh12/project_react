import {Field, reduxForm} from "redux-form";
import React from "react";
import {connect} from "react-redux";
import {profileLogin} from "../../redux/authReducer";
import Redirect from "react-router-dom/es/Redirect";
import LoginFormRedux from "./LoginForm";


const LoginForm=reduxForm({form:"loginForm"})(LoginFormRedux);

const LoginReduxForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.profileLogin(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isLogged) return <Redirect to={'/profile'}/>
    return (
        <div>
            <h1>Login page</h1>
            <LoginForm {...props} onSubmit={onSubmit}/>
        </div>
    )

}
const mapStateToProps=(state)=>({
    isLogged:state.auth.isLogged,
})

const LoginFormContainer = connect(mapStateToProps,{profileLogin})(LoginReduxForm)
export default LoginFormContainer;
