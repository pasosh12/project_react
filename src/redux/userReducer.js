import {followAPI, usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_FETCH_STATUS = 'SET_FETCH_STATUS';
const SET_FOLLOW_STATUS = 'SET_FOLLOW_STATUS';
const SWITCHLIST = 'SWITCHLIST';

let initialState = {
    userData: [],
    usersOnPage: 100,
    usersTotalCount: 1,
    pagesCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {                //возвращает объект который был скопирован у state
                ...state,
                userData: state.userData.map(u => {
                    if (u.id === action.userId) {
                        u.followed = true;
                        return {...u} // {...u, followed:true}
                    }
                    return u;
                })
                // newPostText: ...state.profilePage.newPostText,
                // postsData: [...state.userData, newPost],
            }
        case UNFOLLOW:
            return {
                ...state,
                userData: state.userData.map(u => {
                    if (u.id === action.userId) {
                        u.followed = false;
                        return {...u} // {...u, followed:true}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, userData: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_COUNT:
            return {...state, usersTotalCount: action.totalCount}
        case SET_FETCH_STATUS:
            return {...state, isFetching: action.fetchStatus}
        case SET_FOLLOW_STATUS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        case SWITCHLIST:
            return {...state, currentPage: action.currentPage}
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})  //instead return{ type:ADD_POST }, ()-object
export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber})
export const setUsersTotalCount = (count) => ({type: SET_USERS_COUNT, totalCount: count})
export const setFetchingStatus = (fetchStatus) => ({type: SET_FETCH_STATUS, fetchStatus})
export const toggleFollowingProcess = (isFetching, userId) => ({type: SET_FOLLOW_STATUS, isFetching, userId})
export const switchList = (pageNumber) => ({type: 'SWITCHLIST', currentPage: pageNumber})

export const getUsersThunk = (currentPage, usersOnPage) => {
    return async (dispatch) => {
        dispatch(setFetchingStatus(true));
        let response = await usersAPI.getUsers(currentPage, usersOnPage)
        dispatch(setUsers(response.data.items));
        dispatch(setFetchingStatus(false));
        dispatch(setUsersTotalCount(response.data.totalCount));
    }
}
const followUnfollowToggle=(action, apiMethod, userId)=> {
      return async (dispatch) => {
        dispatch(toggleFollowingProcess(true, userId));
        let response = await apiMethod;
        if (response.data.resultCode === 0) {
            dispatch(toggleFollowingProcess(false, userId));
            dispatch(action);
        }
    }
}
export const followUser = (userId) => {
    let action = follow(userId);
    let apiMethod = followAPI.followUser(userId);
    return followUnfollowToggle(action, apiMethod, userId)
}
export const unfollowUser = (userId) => {
    let action = unfollow(userId);
    let apiMethod = followAPI.unfollowUser(userId);
    return followUnfollowToggle(action, apiMethod, userId)
}
export default usersReducer;