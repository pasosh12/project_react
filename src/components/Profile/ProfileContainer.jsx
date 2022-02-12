import React from "react";
import {connect} from "react-redux";
import {setUserProfile, getUserProfile} from '../../redux/profileReducer'
import Profile from "./ProfileInfo/Profile";
import {withRouter} from "react-router-dom";
import LoaderComponent from "../common/LoaderComponent";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 22;
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.profile) return <LoaderComponent/>
        if (!this.props.isLogged) return <Redirect to={'/login'}/>
        return (
            <Profile profile={this.props.profile}/> /*{...this.props}*/
        )
    }

}


//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//let ProfileContainerWithRouter = withRouter(AuthRedirectComponent);
let mapStateToProps = (state) => {return {profile: state.profilePage.userInfo}}

export default compose(
    withAuthRedirect,
     withRouter,
    connect(mapStateToProps,
    {setUserProfile, getUserProfile}))(ProfileContainer)
//const SuperProfileContainer = (ProfileContainerWithRouter);


