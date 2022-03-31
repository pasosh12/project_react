import {Field} from "redux-form";
import {Input,CreateField} from "../common/FormsControl";
import {required} from "../../utils/validators";
import style from "../common/FormControls.module.css";
import React from "react";

const LoginFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {CreateField(Input,"email","Login",[required])}
            {CreateField(Input,"password","Password",[required],{type:"password"})}
            {CreateField(Input,"rememberMe","",[],{type:"checkbox"})}
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
export default LoginFormRedux;