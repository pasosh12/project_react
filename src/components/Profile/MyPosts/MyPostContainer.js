import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../../src/StoreContext';
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
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {

        addPost: (newPostText)=> dispatch(addPostActionCreator(newPostText)),

    }
}
const SuperMyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default SuperMyPostsContainer;