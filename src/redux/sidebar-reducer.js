let initialState = {
    friends: [
        {
            id: 1,
            name: "Sasha",
            avatar: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"
        },
        {
            id: 2,
            name: "Masha",
            avatar: "https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"
        },
        {
            id: 3,
            name: "Yulia",
            avatar: "https://i.pinimg.com/736x/f9/44/c4/f944c40e5d4027a3a0fe7dfa729cfc51.jpg"
        }
    ]
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;