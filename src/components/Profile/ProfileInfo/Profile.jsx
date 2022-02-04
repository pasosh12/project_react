import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostContainer";
import React from "react";
import LoaderComponent from "../../common/LoaderComponent";
import Redirect from "react-router-dom/es/Redirect";

let Profile=(props)=>{

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );

}

export default Profile;