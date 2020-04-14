import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  let newMsgElement = React.createRef();

  // let addMsg = () => {
  //   props.addMsg();
  // }
  let onMsgChange = () => {
    let text = newMsgElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.message}>
      <textarea onMsChange={onMsgChange} ref={newMsgElement} value={props.newMsgText}/>
      <button onClick={console.log('ok')}>Send</button>
    </div>
  );
};

export default Message;
