let rerenderEntireTree = () => {
    console.log('State changed.');
}

const state = {
    profilePage: {
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
        inputInner: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Sasha", avatar: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
            {
                id: 2,
                name: "Masha",
                avatar: "https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"
            },
            {id: 3, name: "Yulia", avatar: "https://i.pinimg.com/736x/f9/44/c4/f944c40e5d4027a3a0fe7dfa729cfc51.jpg"},
            {id: 4, name: "Igor", avatar: "https://sun1-84.userapi.com/c854528/v854528114/25953e/DZIzha5iftQ.jpg"},
            {
                id: 5,
                name: "Sergey",
                avatar: "https://authorsofmainstreet.files.wordpress.com/2016/01/file0001179129151.jpg"
            },
            {id: 6, name: "Alexey", avatar: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-76.jpg"},
            {
                id: 7,
                name: "Oleg",
                avatar: "https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-21.jpg"
            }
        ],
        messagesData: [
            {id: 1, message: "Hi", avatar: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
            {
                id: 2,
                message: "Hello! How are you?",
                avatar: "https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"
            },
            {
                id: 3,
                message: "I make sites!!! Web-development is cool.",
                avatar: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"
            },
            {
                id: 4,
                message: "Glad to hear. :)",
                avatar: "https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"
            },
            {
                id: 5,
                message: "What are you doing tonight?",
                avatar: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"
            }
        ],
        dialogsInner: ''
    },
    sidebar: {
        friends: [
            {id: 1, name: "Sasha", avatar: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
            {
                id: 2,
                name: "Masha",
                avatar: "https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"
            },
            {id: 3, name: "Yulia", avatar: "https://i.pinimg.com/736x/f9/44/c4/f944c40e5d4027a3a0fe7dfa729cfc51.jpg"}
        ]
    }
}

window.state = state;

export const addPost = () => {
    let newPost =
        {
            id: 5,
            text: state.profilePage.inputInner,
            likes: 0,
            avatar: "https://rust.booknet.com/uploads/user_avatars_new/160/1557413030_859480.png"
        };
    state.profilePage.postsData.push(newPost);
    state.profilePage.inputInner = '';
    rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.inputInner = newText;
    rerenderEntireTree();
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.dialogsInner,
        avatar: "https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"
    }
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.dialogsInner = '';
    rerenderEntireTree();
}

export const updateMessages = (newMessage) => {
    state.dialogsPage.dialogsInner = newMessage;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;