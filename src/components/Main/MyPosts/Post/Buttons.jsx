import React from "react";
import s from "./Buttons.module.css";


const LikeButton = (props) => {
  return (
      <div className='LikesCounter'>
        
        <button className={s.buttonLike}>Like</button> 
      </div>
  )
}



export default LikeButton;
