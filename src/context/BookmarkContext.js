import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { addItems } from "../utils/bookmark/addToBookmark";

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
    setBookmark(addItems);
  };

  const value = {
    bookmark,
    addToBookmark,
  };
  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};
