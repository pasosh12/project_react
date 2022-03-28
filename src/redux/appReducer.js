import {profileAuthorization} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                isInitialized: true
            }
        }

        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(profileAuthorization());
    // promise.add(dispatch())
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess());
    })
}


export default appReducer;
