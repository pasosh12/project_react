import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Input} from "../common/FormsControl";
import {required} from "../../utils/validators";
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={Input} name={"login"} placeholder={"Login"} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} placeholder={"Password"} validate={[required]} name={"password"}/>
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

