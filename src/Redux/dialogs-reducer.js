const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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

}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
  });
  export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  });

// export default dialogsReducer;
