import React from "react";
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={"input"} name={"login"} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={"input"} placeholder={"Password"} name={"password"}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/>remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )

}
const LoginFormRedux = reduxForm({form: 'loginForm'})(LoginForm);

const LoginReduxForm = (props) => {
    const onsubmit = (formData) => {
        console.log(formData);

    }
    return (
        <div>
            <h1>Login page</h1>
            <LoginFormRedux onSubmit={onsubmit}/>
        </div>
    )

}
export default LoginReduxForm;

