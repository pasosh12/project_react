import MyPostsContainer from "./MyPosts/MyPostContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, getUserProfile} from '../../redux/profileReducer'
import Profile from "./ProfileInfo/Profile";
import {withRouter} from "react-router-dom";
import LoaderComponent from "../common/LoaderComponent";
import Redirect from "react-router-dom/es/Redirect";


let mapStateToProps = (state) => ({
    profile: state.profilePage.userInfo,
})


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 22;
        if (this.props.profile)  return <LoaderComponent/>
        if (!this.props.isLogged) return <Redirect to={'/login'}/>
        this.props.getUserProfile(userId);
        //console.log(this.props)
    }
    render() {

        //console.log(this.props.profile)
        return (
            <Profile profile={this.props.profile}/> /*{...this.props}*/
        )
    }

}
let ProfileContainerWithRouter=withRouter(ProfileContainer);
const SuperProfileContainer = connect(mapStateToProps,
    {setUserProfile,getUserProfile})(ProfileContainerWithRouter);
export default SuperProfileContainer;
