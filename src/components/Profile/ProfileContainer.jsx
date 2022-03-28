import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profileReducer'
import Profile from "./ProfileInfo/Profile";
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.userId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        if (!this.props.profile) return <Preloader/>
        if (!this.props.isLogged) return <Redirect to={'/login'}/>
        return (
            <Profile userStatus={this.props.userStatus} updateUserStatus={this.props.updateUserStatus} profile={this.props.profile}/> /*{...this.props}*/
        )
    }

}


//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//let ProfileContainerWithRouter = withRouter(AuthRedirectComponent);
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.userInfo,
        userStatus: state.profilePage.userStatus,
        userId:state.auth.id
    }}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,
    {getUserProfile, getUserStatus, updateUserStatus}))(ProfileContainer)
//const SuperProfileContainer = (ProfileContainerWithRouter);


