import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {reduxForm, Field} from "redux-form";


const MyPosts = (props) => {

    let postsArray = props.postsData.map(p => <Post key={p.id} message={p.message}
                                                    likesCount={p.likescount}/>);
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        props.postChange(e.target.value);
    }

    return (
        <div className={classes.block}>
            <h2>My post</h2>
            <MyPostsForm onPostChange={onPostChange} onAddPost={onAddPost}/>
            <div className={classes.posts}>
                {postsArray}
            </div>
        </div>

    );

}

const MyPostFormRedux = (props) => {
    onsubmit = () => {

    }
    return (
        <form onSubmit={onsubmit}>
            <Field component={"textarea"} onChange={props.onPostChange} className={classes.textarea}
                   placeholder={"Enter some Post text"} value={props.newPostText}>
            </Field>
            <button onClick={props.onAddPost}>Add Post</button>
        </form>
    )
}

const MyPostsForm=reduxForm({form:"postsForm"})(MyPostFormRedux);

export default MyPosts;