import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostContainer";
import React from "react";

let Profile=(props)=>{
    return (
        <div>
            <ProfileInfo userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );

}

export default Profile;