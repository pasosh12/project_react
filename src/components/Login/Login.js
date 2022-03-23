import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControl";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {profileLogin} from "../../redux/authReducer";
import Profile from "../Profile/ProfileInfo/Profile";
import Redirect from "react-router-dom/es/Redirect";

const LoginFormRedux = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"email"} placeholder={"Login"} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type={"password"} name={"password"} placeholder={"Password"} validate={[required]} />
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={"rememberMe"}/>remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )

}
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
