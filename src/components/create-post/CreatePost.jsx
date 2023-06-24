import { useContext, useState } from "react";
import { PostContext } from "../../context/PostContext";
import { AuthContext } from "../../context/AuthContext";

export const CreatePost = () => {
  const [postInput, setPostInput] = useState("");
  const [image, setImage] = useState(null);

  const { setPosts } = useContext(PostContext);

  const { authState } = useContext(AuthContext);
  const { token } = authState;
  const { user } = authState;

  const post = {
    content: postInput,
    postImage: image,
    fullName: user.fullName,
  };

  const inputHandler = (e) => {
    setPostInput(e.target.value);
  };

  const handleFileUploader = (e) => {
    e.target.files[0] === undefined
      ? setImage(null)
      : setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCreatePost = async () => {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ postData: post }),
    });
    const data = await response.json();
    setPosts(data.posts);
    setPostInput("");
    setImage(null);
  };

  return (
    <>
      <div className="create-post-container">
        <div className="profile-input-container">
          <div className="profile-picture"></div>
          <div className="post-input">
            <input
              type="text"
              name="postInput"
              value={postInput}
              onChange={inputHandler}
              placeholder="what's happening?"
            />
          </div>
        </div>
        <div className="create-post-buttons">
          <input
            type="file"
            name="file"
            id="file"
            className="image-file-input"
            onChange={handleFileUploader}
          />
          <label htmlFor="file">
            <img
              className="upload-image-container"
              src="./icons/image-upload.svg"
              alt="image-logo"
            />
          </label>

          <button className="feed-post-button" onClick={handleCreatePost}>
            post
          </button>
        </div>
      </div>
    </>
  );
};
