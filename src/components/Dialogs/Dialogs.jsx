import React from "react";
import s from "./Dialogs.module.css";
import Message from "../Dialogs/Message/Message"
import DialogItem from "../Dialogs/DialogItem/DialogItem"

const Dialogs = (props) => {
  
  let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> ); 
  // ---------------------------------------------[<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,

  let messagesElements = props.state.messages.map ( m => <Message message={m.message} />)
  // ----------------------------------------// <Message message={messageData[1].message} />
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
{/* before the ref<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />, */}
      </div>
      
      <div className={s.messages}>
        {/* <textarea></textarea>
        <button>Send</button> */}
        {messagesElements}
       

{/* before the ref <Message message={messageData[4].message} /> */}

      </div>
    </div>
  );
};

export default Dialogs;
