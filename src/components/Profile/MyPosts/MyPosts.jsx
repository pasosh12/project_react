import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (

        <div>
            My post
            <textarea></textarea>
            <button>Add Post</button>
            <button>Cancel</button>

            <div className={classes.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>

    );
}

export default MyPosts;