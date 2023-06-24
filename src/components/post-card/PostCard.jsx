import { useContext } from "react";
import "./postCard.css";
import { BookmarkContext } from "../../context/BookmarkContext";
import { LikeUnlikeContext } from "../../context/LikeUnlikeContext";
import { AuthContext } from "../../context/AuthContext";

export const PostCard = ({ post }) => {
  const { fullName, username, content, postImage, createdAt } = post;
  const { bookmark, addToBookmark, removeFromBookmark } =
    useContext(BookmarkContext);
  const { likeUnlikeItems, likeThePost, unlikeThePost } =
    useContext(LikeUnlikeContext);
  const { authState } = useContext(AuthContext);
  const { user } = authState;

  // const selectedPost = likeUnlikeItems.find(({ _id }) => post._id);

  const likedByUser = () =>
    post.likes.likedBy.filter((user) => user._id === user._id).length !== 0;

  return (
    <>
      <div className="post-main-container">
        <div className="post-head">
          <div className="user-picture"></div>
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
                {}
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
