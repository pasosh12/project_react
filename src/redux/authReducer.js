import {authAPI} from "../API/api";

const PROFILE_LOGGING = 'PROFILE_LOGGING';


let initialState = {
    id: null,
    login: null,
    email: null,
    isLogged: false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case PROFILE_LOGGING: {
            return {
                ...state,
                ...action.data,
                isLogged: true,
            }
        }
        /* case NEW_MESSAGE_CHANGE: {
             return {
                 ...state,
                 newMessageText : action.message
             }

         }*/
        default:
            return state;
    }
}


export const setLoggingProfile = (id, login, email) => {
    return {
        type: PROFILE_LOGGING,
        data: {id, login, email}
    }
}
export const profileAuthorization = () => (dispatch) => {
    authAPI.login().then(response => {
        //debugger;
        if (response.data.data.resultCode !== 0) {
            let data = response.data.data;
            dispatch(setLoggingProfile(data.id, data.login, data.email));
        }
    })
}

export default authReducer;