import {rerenderEntireTree} from '../render'

let state = { 
    profilePage: {
        posts: [
            { msg: "Hi, how are you?", likesCount: "10" },
            { msg: "It's  first post", likesCount: "14" },
            { msg: "It's my first ", likesCount: "1" },
            { msg: "It's my first post", likesCount: "0" },
            { msg: "It's  post", likesCount: "54" },
            { msg: " my ", likesCount: "4" }
        ],
        newPostText: ' '


    
    },
    dialogsPage: {
        messages: [
            { message: "Hi" },
            { message: "Sup" },
            { message: "Sup" },
            { message: "Sup" },
            { message: "Sup" },
            { message: "Ya" }
        ],
        dialogs: [
            { id: 1, name: "Nazar" },
            { id: 2, name: "Ilia" },
            { id: 3, name: "Olesea" },
            { id: 4, name: "Guf" },
            { id: 5, name: "Nazar" },
            { id: 6, name: "Vlad" }
        ]
    },
    sidebar: {},
}
export let addPost = () => {
    // debugger;
    let newPost = {
        id: 5,
        msg: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText=' ';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    // debugger;

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;