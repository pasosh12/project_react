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
                ...action.payload
                // isLogged: action.data.isLogged,
            }
                debugger;
        }

        default:
            return state;
    }
}


export const setAuthUserData = (id, login, email, isLogged) => {
    return {
        type: PROFILE_LOGGING,
        payload: {id, login, email, isLogged}
    }
}
export const profileAuthorization = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login}= response.data.data;
            dispatch(setAuthUserData(id,login, email,true));
        }
    })
}
export const profileLogin = (email, password) => (dispatch) => {
    authAPI.profileLogin(email, password).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(profileAuthorization());
        }
        else if (response.data.resultCode === 1){
            alert(response.data.messages[0]);
        }
    })
}
export const profileLogout=(email, password)=>(dispatch)=> {
    authAPI.profileLogout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default authReducer;
