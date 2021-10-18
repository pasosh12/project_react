import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let postsArray = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likescount}/>);
    let onAddPost=()=>{
        props.addPost();
    }
    let onPostChange=()=>{
        let text=newPostElement.current.value;
        props.postChange(text);
    }

    return (
        <div className={classes.block}>
            <h2>My post</h2>
            <textarea ref={newPostElement} className={classes.textarea} onChange={ onPostChange }
                      placeholder={"Enter some Post text"} value={props.newPostText}> </textarea>
            <button onClick={ onAddPost }>Add Post</button>


            <div className={classes.posts}>
                {postsArray}
            </div>
        </div>

    );

}

export default MyPosts;