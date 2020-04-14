import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post msg={p.msg} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // debugger;
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={`${s.item} ${s.posts_block}`}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.post}>
        <div>{postsElements}</div>
        {/* <div>
          <Post msg={postsData[1].message} likesCount={postsData[1].likesCount} />
        </div>
 */}
      </div>
    </div>
  );
};

export default MyPosts;
