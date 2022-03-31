import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostContainer";
import React from "react";
window.array=[];

let Profile = (props)=>{
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps!=this.props ) console.log("shouldupdate")
    //     return nextProps!=this.props
    // }

        // render() {
        //     window.array.push(this.props);
        //     console.log("Render", window.array)
       return(
            <div>
                <ProfileInfo userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}
                             profile={props.profile}/>
                <MyPostsContainer store={props.store}/>
            </div>
)
    // }
};
Profile=React.memo(Profile);

export default Profile;