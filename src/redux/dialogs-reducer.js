const ADD_MESSAGE = "ADD-MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

let initialState = {
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
    ]
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: action.message,
                avatar: "https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        }
        case DELETE_MESSAGE: {

            return {
                ...state,
                messagesData: state.messagesData.filter(m => m.id != action.lastMessageId)
            };
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (message) => {
    return {type: ADD_MESSAGE, message}
};
export const deleteMessageActionCreator = (lastMessageId) => {
    return {type: DELETE_MESSAGE, lastMessageId}
};


export default dialogsReducer;