import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./Redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App 
      state={state} 
      updateNewPostText={updateNewPostText}
      addPost={addPost} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

