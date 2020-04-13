import React from "react";
import s from "./Post.module.css";
import LikeButton from "./Buttons";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://www.chiechiera.it/wp-content/uploads/2019/11/avatar.jpg"
        alt=""
      />
      {props.msg}
      <div>
        {props.likesCount}
        <LikeButton />
      </div>
    </div>
  );
};

export default Post;
