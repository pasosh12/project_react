import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {profileAuthorization, setLoggingProfile} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.profileAuthorization();
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    isLogged:state.auth.isLogged,
    name:state.auth.login,

})
export default connect(mapStateToProps, {setLoggingProfile, profileAuthorization})(HeaderContainer)
