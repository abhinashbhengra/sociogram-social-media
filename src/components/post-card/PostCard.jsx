import "./postCard.css";

export const PostCard = ({ post }) => {
  const { fullName, username, content, postImage, createdAt } = post;
  return (
    <>
      <div className="post-main-container">
        <div className="post-head">
          <div className="user-picture"></div>
          <div className="user-name-username">
            <div className="user-name">{fullName}</div>
            <div className="user-username">{username}</div>
          </div>
          <div className="post-date">{createdAt}</div>
        </div>
        <div className="post-content-container">
          <div className="post-content">{content}</div>
          {postImage && (
            <img src={postImage} alt={content} className="post-image" />
          )}
        </div>
        <div className="post-foot">
          <div className="post-like">
            <img src="../icons/like.svg" alt="like-icon" />
          </div>
          <div className="post-comment">
            <img src="../icons/comment.svg" alt="comment-logo" />
          </div>
          <div className="post-bookmark">
            <img src="../icons/bookmark.svg" alt="bookmark-logo" />
          </div>
        </div>
      </div>
    </>
  );
};
