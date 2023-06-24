import { createContext, useEffect, useState } from "react";

export const PostContext = createContext({
  posts: [],
});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data.posts);
      } catch (e) {
        console.log(e);
      }
    };
    getPost();
  }, []);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
