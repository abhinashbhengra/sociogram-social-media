import { createContext, useEffect, useState } from "react";

export const PostContext = createContext({
  posts: [],
});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const deletePost = async (postId, token) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      setPosts(data.posts);
    } catch (e) {
      console.log(e);
    }
  };

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
    <PostContext.Provider value={{ posts, setPosts, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};
