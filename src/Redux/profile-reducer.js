const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { msg: "Hi, how are you?", likesCount: "10" },
    { msg: "It's  first post", likesCount: "14" },
    { msg: "It's my first ", likesCount: "1" },
    { msg: "It's my first post", likesCount: "0" },
    { msg: "It's  post", likesCount: "54" },
    { msg: " my ", likesCount: "4" },
  ],
  newPostText: "",
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                msg: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = " ";
            return state;
          case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;
          default:
            return state

    }
}
export const addPostActionCreator = () => ({
    type: ADD_POST,
  });
  export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  });
  