import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader';
import {connect} from 'react-redux';
import {
    setCurrentPage, toggleFollowingProcess, getUsersThunk,
    followUser, unfollowUser, switchList
} from '../../redux/userReducer';
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetchingStatus, getPagesCount,
    getToggleFollowingProcess,
     getUsersOnPage, getUsersSelector,
    getUsersTotalCount
} from "../../redux/usersSelectors";


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
// debugger;
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
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
        users: getUsersSelector(state),
        usersOnPage: getUsersOnPage(state),
        usersTotalCount: getUsersTotalCount(state),
        pagesCount: getPagesCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetchingStatus(state),
        followingInProgress: getFollowingInProgress(state),
        toggleFollowingProcess: getToggleFollowingProcess(state),
    }
    // return {
    //     users: state.usersPage.userData,
    //     usersOnPage: state.usersPage.usersOnPage,
    //     usersTotalCount: state.usersPage.usersTotalCount,
    //     pagesCount: state.usersPage.pagesCount,
    //     currentPage: state.usersPage.currentPage,
    //     isFetching: state.usersPage.isFetching,
    //     followingInProgress: state.usersPage.followingInProgress,
    //     toggleFollowingProcess: state.usersPage.toggleFollowingProcess,
    // }
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
    switchList
})(UsersApiContainer);
export default SuperUsersContainer;