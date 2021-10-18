import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import React from "react";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );

}

export default Profile;