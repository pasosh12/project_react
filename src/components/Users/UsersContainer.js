import React from 'react';
import {
    follow,
    setCurrentPage,
    setUsersTotalCount,
    setUsers,
    unfollow,
    setFetchingStatus,
    toggleFollowingProcess
} from '../../redux/userReducer';

import LoaderComponent from '../common/LoaderComponent';
import {connect} from 'react-redux';
import User from './User';
import {usersAPI} from "../../API/api";


/* const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                    /!*newPostElement.current.value="";*!/
                }

                let postChange = (text) => {
                    let action = updateNewPostActionCreator(text); //ctrl+alt+V
                    store.dispatch(action)
                }

                return <MyPosts postsData={store.getState().profilePage.postsData} addPost={addPost}
                                newPostText={store.getState().profilePage.newPostText} postChange={postChange}/>

            }
        }
    </StoreContext.Consumer>
}*/

class UsersApiContainer extends React.Component {
    componentDidMount() {
        /* this.props.setUsers([
             {
                 id: 1,
                 followed: true,
                 status: 'React developer',
                 name: 'Andrew K.',
                 location: {city: 'Brest', country: 'Belarus'},
                 photos: {
                     small: null,
                     large: "https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-9.jpg"
                 }
             },
             {}
         ])*/
        this.props.setFetchingStatus(true);
        usersAPI.getUsers(this.props.currentPage,this.props.usersOnPage).then(response => {

                this.props.setUsers(response.data.items);
                this.props.setFetchingStatus(false);
                this.props.setUsersTotalCount(response.data.totalCount);
            })
    }

    pageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetchingStatus(true);

       usersAPI.getUsers(pageNumber,this.props.usersOnPage).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setFetchingStatus(false);
            });
        /*if(response.data.items.photos.small && response.data.items.status)this.props.setUsers(response.data.items)*/


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
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowingProcess={ this.props.toggleFollowingProcess}
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
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:
            (pageNumber) => {
                dispatch(setCurrentPageAC(pageNumber))
            },
        setUsersTotalCount:
            (usersTotalCount) => {
                dispatch(setUsersTotalCountAC(usersTotalCount))
            },
        setFetchingStatus:
            (fetchStatus) => {
                dispatch(setFetchingStatusAC(fetchStatus))
            }
    }
}*/


const SuperUsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setFetchingStatus, toggleFollowingProcess,
})(UsersApiContainer);
export default SuperUsersContainer;