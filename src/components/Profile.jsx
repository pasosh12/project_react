import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Polish_Wikinews_header_image.png"></img>
            </div>

            <div>ava+description</div>

            <div>My post
                    <div>New Post</div>
               <div className = "posts">
                   <div className={classes.item}> post 1 </div>
                   <div className={classes.item}> post 2 </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;