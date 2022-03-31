import {authAPI, profileAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const NEW_POST_CHANGE = 'NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS='SET_USER_STATUS';


let initialState = {
    postsData: [
        {id: 1, message: 'Hello!', likescount: 10},
        {id: 2, message: "It's my first Post", likescount: 15}
    ],
    newPostText: '',
    userInfo: '',
    // userStatus: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {                //возвращает объект который был скопирован у state
                ...state,
                // newPostText: ...state.profilePage.newPostText,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }

        case SET_USER_PROFILE: {
            return {...state, userInfo: action.userInfo}
        }
        case SET_USER_STATUS:{
            return {...state, userStatus: action.userStatus}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText:newPostText})
export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus})
export const setUserProfile = (userInfo) => ({type: SET_USER_PROFILE, userInfo})

export const getUserProfile = (userId) => async (dispatch) => {
    let response= await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
        console.log(response);
        dispatch(setUserStatus(response.data));
}
export const updateUserStatus = (userStatus) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(userStatus)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(userStatus));
        }
}


export default profileReducer;