import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { likePost } from "../utils/like-unlike/likePost";
import { unlikePost } from "../utils/like-unlike/unlikePost";
import { PostContext } from "./PostContext";

export const LikeUnlikeContext = createContext({
  likeUnlikeState: [],
  likeUnlikeDispatch: () => {},
});

export const LikeUnlikeProvider = ({ children }) => {
  const { posts, setPosts } = useContext(PostContext);
  const [likeUnlikeItems, setLikeUnlikeItems] = useState([]);
  const { authState } = useContext(AuthContext);
  const { token } = authState;

  const likeThePost = async (postId) => {
    const likedItems = await likePost(token, postId);
    setLikeUnlikeItems(likedItems);
    setPosts(likedItems);
  };

  const unlikeThePost = async (postId) => {
    const updatedItems = await unlikePost(token, postId);
    setLikeUnlikeItems(updatedItems);
    setPosts(updatedItems);
  };

  const value = {
    likeUnlikeItems,
    likeThePost,
    unlikeThePost,
  };

  return (
    <LikeUnlikeContext.Provider value={value}>
      {children}
    </LikeUnlikeContext.Provider>
  );
};
