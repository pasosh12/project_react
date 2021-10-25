const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE='SET-CURRENT-PAGE';
const SET_USERS_COUNT='SET-USERS-COUNT';

let initialState = {
    userData:[],
    usersOnPage:100,
    usersTotalCount:1,
    pagesCount:0,
    currentPage:1,

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
                } )
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
            return { ...state, userData: action.users }

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_COUNT:
            return {...state, usersTotalCount: action.totalCount}
        default: return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })  //instead return{ type:ADD_POST }, ()-object
export const unfollowAC = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC=(pageNumber)=>({type: SET_CURRENT_PAGE, currentPage:pageNumber })
export const setUsersTotalCountAC=(count)=>({type: SET_USERS_COUNT, totalCount:count })



export default usersReducer;