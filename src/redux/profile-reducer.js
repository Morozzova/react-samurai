import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
const SET_EDIT_MODE = "SET_EDIT_MODE";

let initialState = {
    postsData: [
        {
            id: 1,
            text: "Hi! How are you?",
            likes: 7,
            avatar: "https://million-wallpapers.ru/wallpapers/5/51/small/455458761658281.jpg"
        },
        {
            id: 2,
            text: "This is my first post.",
            likes: 18,
            avatar: "https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"
        },
        {
            id: 3,
            text: "I wanna be a programmer.",
            likes: 1000,
            avatar: "https://img3.goodfon.ru/original/320x240/f/89/elenasai-risounok-lico.jpg"
        }
    ],
    profile: null,
    userStatus: "",
    infoEditMode: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost =
                {
                    id: 5,
                    text: action.post,
                    likes: 0,
                    avatar: "https://rust.booknet.com/uploads/user_avatars_new/160/1557413030_859480.png"
                };

            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                userStatus: action.userStatus
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        case UPDATE_PROFILE_SUCCESS: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_EDIT_MODE: {
            return {
                ...state,
                infoEditMode: action.isEditMode
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const updateProfileSuccess = (profile) => ({type: UPDATE_PROFILE_SUCCESS, profile});
export const toggleEditMode = (isEditMode) => ({type: SET_EDIT_MODE, isEditMode});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.showUsersProfile(userId);
    dispatch(setUserProfile(response));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response));

}
export const updateStatus = (message) => async (dispatch) => {
    try {
    let response = await profileAPI.updateMyStatus(message)

    if (response.resultCode === 0) {
        dispatch(setUserStatus(message));
    }
    } catch(error) {
        //dispatch();
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.updateMyPhoto(file)
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}
export const updateProfile = (formData, actions) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.updateMyProfile(formData)
    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId));
        dispatch(toggleEditMode(false));
    } else {
        actions.setStatus(response.messages);
    }
}

export default profileReducer;