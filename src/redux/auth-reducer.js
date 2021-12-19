import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getMyProfile = () => async (dispatch) => {
    let response = await authAPI.showMyProfile();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginOnSite = (email, password, rememberMe = false, actions) => async (dispatch) => {

    let response = await authAPI.loginHere(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getMyProfile());
    } else {
        /*let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));*/
        actions.setStatus(response.messages);
    }
}
export const logOutOnSite = () => async (dispatch) => {
    let response = await authAPI.logOut();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}
export const getCaptcha = () => async (dispatch) => {
    let response = await authAPI.getCaptcha();
    if (response.resultCode === 0) {
        dispatch(loginOnSite());
    }
}

export default authReducer;