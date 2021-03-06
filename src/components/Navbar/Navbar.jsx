import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={s.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/news">News</a>
      </div>
      <div className={s.item}>
        <a href="/music">Music</a>
      </div>
      <div className={s.item}>
        <a href="/settings">Settings</a>
      </div>
      <div className={s.ava_nav}>
        <div className={s.ava_nav_item}>
          <img
            className={s.avatar_dialog}
            src="https://www.chiechiera.it/wp-content/uploads/2019/11/avatar.jpg"
            alt=""
          />
          <span>Joe</span>
        </div>
        <div className={s.ava_nav_item}>
          <img
            className={s.avatar_dialog}
            src="https://www.chiechiera.it/wp-content/uploads/2019/11/avatar.jpg"
            alt=""
          />
          <span>Joe</span>
        </div>
        <div className={s.ava_nav_item}>
          <img
            className={s.avatar_dialog}
            src="https://www.chiechiera.it/wp-content/uploads/2019/11/avatar.jpg"
            alt=""
          />
          <span>Joe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
