let store = {
  _state: {
    profilePage: {
      posts: [
        { msg: "Hi, how are you?", likesCount: "10" },
        { msg: "It's  first post", likesCount: "14" },
        { msg: "It's my first ", likesCount: "1" },
        { msg: "It's my first post", likesCount: "0" },
        { msg: "It's  post", likesCount: "54" },
        { msg: " my ", likesCount: "4" }
      ],
      newPostText: " it "
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
      // newMessage: "",
      dialogs: [
        { id: 1, name: "Nazar" },
        { id: 2, name: "Ilia" },
        { id: 3, name: "Olesea" },
        { id: 4, name: "Guf" },
        { id: 5, name: "Nazar" },
        { id: 6, name: "Vlad" }
      ]
    },
    sidebar: {}
  },
  getState() {
    // debugger
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    // debugger;
    let newPost = {
      id: 5,
      msg: this._state.profilePage.newPostText,
      likesCount: 0
    };
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = " ";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText){
    // debugger;
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

}


export default store;
window.store = store
