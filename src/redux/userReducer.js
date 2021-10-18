const FOLLOW = 'FOLLOW';
const unfollow = 'unfollow';
const SET_USERS = 'SET-USERS';

let initialState = {
    userData:[],

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case unfollow:
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
        case SET_USERS:
            return {...state, userData:[...state.userData, ...action.users ]}
        default: return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })  //instead return{ type:ADD_POST }, ()-object
export const unfollowAC = (userId) => {
    return { type: unfollow, userId }
}
export const setUsersAC = (users) => ({ type: SET_USERS, users })



export default usersReducer;