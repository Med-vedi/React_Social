import React from "react";
import s from "../../Dialogs/Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink className={s.dialog_name} to={path}>
        <img className={s.avatar_dialog} src="https://www.chiechiera.it/wp-content/uploads/2019/11/avatar.jpg"
              alt=""/>
        <span>{props.name}{" "}</span>
      </NavLink>
    </div>
  );
};


export default DialogItem;
