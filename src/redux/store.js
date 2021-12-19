import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
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
                },
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
                {
                    id: 1,
                    message: "Hi",
                    avatar: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"
                },
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
        }
    },
    _callSubscriber() {
        console.log('State changed.');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;

/*        props.setUsers([
            {
                required: {
                    id: 1,
                    firstName: "Lubov",
                    secondName: "Morozzova"
                },
                location: {
                    country: "Russia",
                    city: "Gatchina"
                },
                condition: {
                    status: "Life is pain.",
                    avatar: "https://pbs.twimg.com/profile_images/628810372494004224/HdO98yfy.jpg"
                },
                relation: {
                    followed: true
                }
            },
            {
                required: {
                    id: 2,
                    firstName: "Svetlana",
                    secondName: "Tikhonova"
                },
                location: {
                    country: "Russia",
                    city: "Saint-Petersburg"
                },
                condition: {
                    status: "Bazinga!",
                    avatar: "https://www.meme-arsenal.com/memes/94e919375d99a034aa59217f7e305d15.jpg"
                },
                relation: {
                    followed: true
                }
            },
            {
                required: {
                    id: 3,
                    firstName: "Maria",
                    secondName: "Tkachenko"
                },
                location: {
                    country: "Ukraine",
                    city: "Kiev"
                },
                condition: {
                    status: "I can fly, my friend!",
                    avatar: "https://photo-cms-kienthuc.zadn.vn/zoom/800/Uploaded/manhtu/2017_10_13/vi-sao-em-yeu-anh-6_RJJE.jpg"
                },
                relation: {
                    followed: false
                }
            },
            {
                required: {
                    id: 4,
                    firstName: "Pekka",
                    secondName: "Himonen"
                },
                location: {
                    country: "Finland",
                    city: "Helsinki"
                },
                condition: {
                    status: "Born to be wild.",
                    avatar: "https://i.pinimg.com/236x/1e/78/05/1e78050a503af5f1fc0f7c0fd6ea93ea.jpg"
                },
                relation: {
                    followed: false
                }
            }]);*/