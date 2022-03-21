import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {reduxForm, Field} from "redux-form";

const MyPostFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPostText"}
                   placeholder={"Enter some Post text"} >
            </Field>
            <button>Add Post</button>
        </form>
    )
}
const AddNewPostFormRedux=reduxForm({form:"AddNewPostForm"})(MyPostFormRedux);

const MyPosts = (props) => {

    let postsArray = props.postsData.map(p => <Post key={p.id} message={p.message}
                                                    likesCount={p.likescount}/>);
    let onAddPost=(value)=>{
        props.addPost(value.newPostText);
    }

    return (
        <div className={classes.block}>
            <h2>My post</h2>
            <div className={classes.textarea}>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>

            <div className={classes.posts}>
                {postsArray}
            </div>
        </div>

    );

}


export default MyPosts;