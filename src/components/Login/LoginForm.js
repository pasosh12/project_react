import {Field} from "redux-form";
import {Input} from "../common/FormsControl";
import {required} from "../../utils/validators";
import style from "../common/FormControls.module.css";
import React from "react";

const LoginFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"email"} placeholder={"Login"} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type={"password"} name={"password"} placeholder={"Password"} validate={[required]} />
            </div>
            <div className={style.error}> {props.error}</div>
            <div>
                <Field component={Input} type={"checkbox"} name={"rememberMe"}/>remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
export default LoginFormRedux;