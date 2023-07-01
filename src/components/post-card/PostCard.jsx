import "./postCard.css";
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { BookmarkContext } from "../../context/BookmarkContext";
import { LikeUnlikeContext } from "../../context/LikeUnlikeContext";
import { AuthContext } from "../../context/AuthContext";
import { PostContext } from "../../context/PostContext";
import { EditPost } from "../edit-post/EditPost";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.70)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#262626",
    color: "#a5a5a5",
    width: 500,
    height: "auto",
    overflow: "hidden",
    border: "none",
  },
};

export const PostCard = ({ post, profileAvatar }) => {
  const { fullName, username, content, postImage, createdAt } = post;
  const { bookmark, addToBookmark, removeFromBookmark } =
    useContext(BookmarkContext);
  const { likeThePost, unlikeThePost } = useContext(LikeUnlikeContext);
  const { authState } = useContext(AuthContext);
  const { deletePost } = useContext(PostContext);
  const { user, token } = authState;

  const [optionOpen, setOptionOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const likedByUser = () =>
    post?.likes?.likedBy?.filter((user) => user._id === user._id)?.length !== 0;

  return (
    <>
      <div className="post-main-container">
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
          ariaHideApp={false}
        >
          <p>Edit Post</p>
          <EditPost
            close={setModalOpen}
            selectedPost={post}
            optionClose={setOptionOpen}
          />
        </Modal>
        <div className="post-head">
          <div className="user-picture">
            <img src={profileAvatar} alt={username} />
          </div>
          <div className="user-name-username">
            <div className="user-name">{fullName}</div>
            <div className="user-username">{username}</div>
          </div>
          <div className="post-date">
            {new Date(createdAt)
              .toDateString()
              .split(" ")
              .slice(1, 4)
              .join(" ")}
          </div>
          <div
            className="post-options-container"
            onClick={() => setOptionOpen(true)}
          >
            <img src="./icons/options.svg" alt="options-icon" />
          </div>
          <div
            className="options"
            style={{ display: optionOpen ? "block" : "none" }}
          >
            <img
              src="./icons/cancel.svg"
              alt="cancel-logo"
              className="cancel-button"
              onClick={() => setOptionOpen(false)}
            />
            {user.username === post.username ? (
              <div>
                <p className="option-text" onClick={() => setModalOpen(true)}>
                  Edit
                </p>
                <p
                  className="option-text"
                  onClick={() => deletePost(post._id, token)}
                >
                  Delete
                </p>
              </div>
            ) : (
              <div>
                <p className="option-text">Follow</p>
                <p className="option-text">Unfollow</p>
              </div>
            )}
          </div>
        </div>
        <div className="post-content-container">
          <div className="post-content">{content}</div>
          {postImage && (
            <img src={postImage} alt={content} className="post-image" />
          )}
        </div>
        <div className="post-foot">
          <div className="post-like">
            {}
            {likedByUser() ? (
              <div onClick={() => unlikeThePost(post._id)}>
                <img
                  src="../icons/filledheart.svg"
                  alt="like-icon"
                  className="post-like-image"
                />
              </div>
            ) : (
              <div onClick={() => likeThePost(post._id)}>
                <img
                  src="../icons/heart.svg"
                  alt="like-icon"
                  className="post-like-image"
                />
              </div>
            )}
          </div>
          <div className="post-comment">
            <img src="../icons/comment.svg" alt="comment-logo" />
          </div>
          <div className="post-bookmark">
            {bookmark.find(({ _id }) => _id === post._id) ? (
              <div onClick={() => removeFromBookmark(post._id)}>
                <img
                  src="./icons/bookmark-filled.svg"
                  alt="bookmark-logo"
                  className="post-bookmark-image"
                />
              </div>
            ) : (
              <div onClick={() => addToBookmark(post._id)}>
                <img
                  src="./icons/bookmark.svg"
                  alt="bookmark-logo"
                  className="post-bookmark-image"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
