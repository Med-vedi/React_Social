import * as serviceWorker from "./serviceWorker"
import state, {subscribe} from "./Redux/state"
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./Redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        updateNewPostText={updateNewPostText}
        addPost={addPost}
        // updateMessage={updateMessage}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

serviceWorker.unregister()