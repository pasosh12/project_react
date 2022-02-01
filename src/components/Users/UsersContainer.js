import React from 'react';
import User from './User';
import LoaderComponent from '../common/LoaderComponent';
import {connect} from 'react-redux';
import {
    setCurrentPage, toggleFollowingProcess, getUsersThunk,
    followUser, unfollowUser
} from '../../redux/userReducer';


class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.usersOnPage);
    }

    pageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunk(pageNumber, this.props.usersOnPage);
    }

    render() {
        let pages = [];
        let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.usersOnPage);
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <>
                {this.props.isFetching ? <LoaderComponent/> : null}
                <User
                    pages={pages}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageChanged={this.pageChanged}
                    followUser={this.props.followUser} //
                    unfollowUser={this.props.unfollowUser} //
                    isFetching={this.props.isFetching}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowingProcess={this.props.toggleFollowingProcess}
                />
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.userData,
        usersOnPage: state.usersPage.usersOnPage,
        usersTotalCount: state.usersPage.usersTotalCount,
        pagesCount: state.usersPage.pagesCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        toggleFollowingProcess: state.usersPage.toggleFollowingProcess,
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => {
            let action = unfollowAC(userId);
            dispatch(action);
        },
}*/


const SuperUsersContainer = connect(mapStateToProps, {
    followUser, unfollowUser,
    setCurrentPage,
    toggleFollowingProcess,
    getUsersThunk,
})(UsersApiContainer);
export default SuperUsersContainer;