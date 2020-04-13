import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.app_wrapper_content}>
      <div>
        <img src={require("../../Images/ProfileImage.jpeg")} width="60%" alt="img"/>
      </div>
      <div className={`${s.item} ${s.description_block}`}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
