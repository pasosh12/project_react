import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostContainer";
import React from "react";

let Profile=(props)=>{
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            debugger;
            <MyPostsContainer store={props.store}/>
        </div>
    );

}

export default Profile;