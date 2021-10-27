import React from 'react';
import {
    follow,
    setCurrentPage,
    setUsersTotalCount,
    setUsers,
    unfollow,
    setFetchingStatus
} from '../../redux/userReducer';

import LoaderComponent from '../common/LoaderComponent';
import {connect} from 'react-redux';
import * as axios from 'axios';
import User from './User';


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
             {
                 id: 2,
                 followed: false,
                 status: 'UX-UI designer',
                 name: 'Victor S.',
                 location: {city: 'Kiev', country: 'Ukraine'},
                 photos: {
                     small: null,
                     large: "https://i04.fotocdn.net/s127/bfdacb44a400fbd1/user_xl/2876986631.jpg"
                 }
             },
             {
                 id: 3,
                 followed: false,
                 status: 'developing cool',
                 name: 'Greg H.',
                 location: {city: 'London', country: 'UK'},
                 photos: {
                     small: null,
                     large: "https://i01.fotocdn.net/s124/3af3fb1b324c30bc/gallery_l/2824821900.jpg"
                 }
             }

         ])*/
        this.props.setFetchingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(response => {

            this.props.setUsers(response.data.items);
            this.props.setFetchingStatus(false);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    }

    pageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetchingStatus(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`)
            .then(response => {

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
                { this.props.isFetching ? <LoaderComponent/> : null}
                <User pages={pages}
                      users={this.props.users}
                      currentPage={this.props.currentPage}
                      pageChanged={this.pageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
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
    follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setFetchingStatus
})(UsersApiContainer);
export default SuperUsersContainer;