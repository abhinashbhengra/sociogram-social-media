import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { likePost } from "../utils/like-unlike/likePost";
import { unlikePost } from "../utils/like-unlike/unlikePost";

export const LikeUnlikeContext = createContext({
  likeUnlikeState: {},
  likeUnlikeDispatch: () => {},
});

export const LikeUnlikeProvider = ({ children }) => {
  const [likeUnlikeItems, setLikeUnlikeItems] = useState([]);
  const { authState } = useContext(AuthContext);
  const { token } = authState;

  const likeThePost = async (postId) => {
    console.log(postId);
    const likedItems = await likePost(token, postId);
    setLikeUnlikeItems(likedItems);
  };

  const unlikeThePost = async (postId) => {
    const updatedItems = await unlikePost(token, postId);
    setLikeUnlikeItems(updatedItems);
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
