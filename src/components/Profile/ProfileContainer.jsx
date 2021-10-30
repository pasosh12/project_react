import MyPostsContainer from "./MyPosts/MyPostContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from '../../redux/profileReducer'
import Profile from "./ProfileInfo/Profile";


let mapStateToProps = (state) => ({ profile: state.profilePage.userInfo})

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (userInfo) => {
            dispatch(setUserProfileAC(userInfo))
        }
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/22`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }

}

const SuperProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
export default SuperProfileContainer;
