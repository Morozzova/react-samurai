import React from "react";
import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "58104371-4566-41cd-8503-b9344f9372ef"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    showUsersProfile(userId) {
        console.warn('Obsolete method. Use profileAPI object.');
        return profileAPI.showUsersProfile(userId);
    }
};

export const profileAPI = {
    showUsersProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    updateMyStatus(message) {
        return instance.put(`profile/status`, {status: message})
            .then(response => {
                return response.data;
            });
    },
    updateMyPhoto(file) {
        let formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then(response => {
                return response.data;
            });
    },
    updateMyProfile(formData) {
        return instance.put(`profile`, {
            aboutMe: formData.aboutMe,
            lookingForAJob: formData.lookingForAJob,
            lookingForAJobDescription: formData.lookingForAJobDescription,
            fullName: formData.fullName,
            contacts: {
                github: formData.github,
                vk: formData.vk,
                facebook: formData.facebook,
                instagram: formData.instagram,
                twitter: formData.twitter,
                website: formData.website,
                youtube: formData.youtube,
                mainLink: formData.mainLink
            }
        })
            .then(response => {
                return response.data;
            });
    }
};

export const authAPI = {
    showMyProfile() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    loginHere(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe, captcha: captcha})
            .then(response => {
                return response.data;
            });
    },
    logOut() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
            });
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data;
            });
    }
}