import {getMyProfile} from "./auth-reducer";
import {securityAPI} from "../api/api";
import {savePhotoSuccess} from "./profile-reducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const SHOW_GLOBAL_ERROR = "SHOW_GLOBAL_ERROR";

let initialState = {
    initialized: false,
    globalError: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
            case SHOW_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.error
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const showGlobalError = (error) => ({type: SHOW_GLOBAL_ERROR, error})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getMyProfile());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        });
}

export const getGlobalError = (error) => async (dispatch) => {
    let response = await securityAPI.getGlobalError(error)
    if (response.resultCode === 1) {
        dispatch(showGlobalError(response.data.messages));
    }
}

export default appReducer;