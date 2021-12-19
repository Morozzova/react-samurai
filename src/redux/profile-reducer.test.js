import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

// 1. Test data
let state = {
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
    ]
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("it-kama");

    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.postsData.length).toBe(4);

});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("it-kama");
    let newState = profileReducer(state, action)

    expect(newState.postsData[3].text).toBe("it-kama");

});

test('after deleting length of messages should be decrement', () => {

    let action = deletePost(1);

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(2);

});

test('incorrect post for deleting', () => {

    let action = deletePost(1000);

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(3);

});