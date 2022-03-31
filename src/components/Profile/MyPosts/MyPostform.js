import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControl";


const maxLength30=maxLength(30);
const MyPostFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"}
                   placeholder={"Enter some Post text"} validate={[required, maxLength30]}>
            </Field>
            <button>Add Post</button>
        </form>
    )
}
export const AddNewPostFormRedux=reduxForm({form:"AddNewPostForm"})(MyPostFormRedux);
