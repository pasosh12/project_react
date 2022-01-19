const ADD_POST = 'ADD-POST';
const NEW_POST_CHANGE = 'NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello!', likescount: 10},
        {id: 2, message: "It's my first Post", likescount: 15}
    ],
    newPostText: '',
    userInfo: null,


}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {                //возвращает объект который был скопирован у state
                ...state,
               // newPostText: ...state.profilePage.newPostText,
                postsData: [...state.postsData, newPost],
                newPostText:''
            }
        }

        case NEW_POST_CHANGE: {
            return {
                ...state,
                newPostText: action.postText
            }

        }
        case SET_USER_PROFILE:{
            return {...state, userInfo: action.userInfo}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () =>
    ({type: ADD_POST})
export const updateNewPostActionCreator = (postText) =>
    ({
        type: NEW_POST_CHANGE,
        postText: postText
    })                   //instead return{ type:ADD_POST }, ()-object
export const setUserProfile = (userInfo) => ({
  type: SET_USER_PROFILE, userInfo
})


export default profileReducer;