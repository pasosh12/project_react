import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setLoggingProfile} from "../../redux/authReducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
            .then(response => {

                if(response.data.data.resultCode!==0){
                    let data=response.data.data;
                    this.props.setLoggingProfile(data.id, data.login, data.email);

                }
            });
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
export default connect(mapStateToProps, {setLoggingProfile})(HeaderContainer)
