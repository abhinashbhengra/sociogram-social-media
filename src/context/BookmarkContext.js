import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { addItems } from "../utils/bookmark/addToBookmark";
import { removeItems } from "../utils/bookmark/removeFromBookmark";

export const BookmarkContext = createContext({
  bookmarkState: {},
  bookmarkDispatch: () => {},
});

export const BookmarkProvider = ({ children }) => {
  const [bookmark, setBookmark] = useState([]);
  const { authState } = useContext(AuthContext);
  const { token } = authState;

  const addToBookmark = async (postId) => {
    const addedItems = await addItems(token, postId);
    setBookmark(addedItems);
  };

  const removeFromBookmark = async (postId) => {
    const updatedItems = await removeItems(token, postId);
    setBookmark(updatedItems);
  };

  const value = {
    bookmark,
    addToBookmark,
    removeFromBookmark,
  };
  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};
