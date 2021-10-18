import React from 'react';
import {followAC, setUsersAC, unfollowAC} from "../../redux/userReducer";
import UsersC from "./UsersC";
import {connect} from 'react-redux';


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
const mapStateToProps=(state)=>{
    return {
        users: state.usersPage.userData,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        follow: (userId)=>dispatch(followAC(userId)),
        unfollow: (userId)=>{
           let action=unfollowAC(userId);
            dispatch(action);
        },
        setUsers: (users)=>{dispatch(setUsersAC(users))}

    }
}
const SuperUsersContainer=connect(mapStateToProps,mapDispatchToProps)(UsersC);
export default SuperUsersContainer;