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
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    followUser (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    showUsersProfile (userId) {
        console.warn('Obsolete method. Use profileAPI object.');
        return profileAPI.showUsersProfile(userId);
    }
};

export const profileAPI = {
    showUsersProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    updateMyStatus (message) {
        return instance.put(`profile/status`, {status: message})
            .then(response => {
                return response.data;
            });
    }
};

export const authAPI = {
    showMyProfile () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    loginHere (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe})
            .then(response => {
                return response.data;
            });
    },
    logOut () {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
            });
    },
    getCaptcha () {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data;
            });
    }
}