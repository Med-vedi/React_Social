import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={s.message}>
      <textarea>{props.message}</textarea>
      <button>Send</button>
    </div>
  );
};

export default Message;
