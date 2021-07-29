   import classes from "./Profile.module.css";
   import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Polish_Wikinews_header_image.png"></img>
            </div>

            <div>ava+description</div>
           
           <MyPosts />
           
        </div>
    );
}

export default Profile;