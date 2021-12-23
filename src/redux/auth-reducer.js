import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "react-samurai/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "react-samurai/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe: false,
    captchaUrl: null //if null, then captcha is not required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const getMyProfile = () => async (dispatch) => {
    let response = await authAPI.showMyProfile();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginOnSite = (email, password, rememberMe = false, captcha = null, actions) => async (dispatch) => {
    let response = await authAPI.loginHere(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(getMyProfile());
    } else {
        /*let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));*/
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        actions.setStatus(response.messages);
    }
}
export const logOutOnSite = () => async (dispatch) => {
    let response = await authAPI.logOut();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(getCaptchaUrlSuccess(null));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;