import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostContainer";
import React from "react";

let Profile=(props)=>{
    console.log(props);

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );

}

export default Profile;