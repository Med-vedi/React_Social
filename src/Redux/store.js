import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { msg: "Hi, how are you?", likesCount: "10" },
        { msg: "It's  first post", likesCount: "14" },
        { msg: "It's my first ", likesCount: "1" },
        { msg: "It's my first post", likesCount: "0" },
        { msg: "It's  post", likesCount: "54" },
        { msg: " my ", likesCount: "4" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Sup" },
        { id: 3, message: "Sup" },
        { id: 4, message: "Sup" },
        { id: 5, message: "Sup" },
        { id: 6, message: "Ya" },
      ],
      dialogs: [
        { id: 1, name: "Nazar" },
        { id: 2, name: "Ilia" },
        { id: 3, name: "Olesea" },
        { id: 4, name: "Guf" },
        { id: 5, name: "Nazar" },
        { id: 6, name: "Vlad" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    // debugger
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
  },
};

export default store;
window.store = store;
