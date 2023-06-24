import "./bookmark.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";
import { PostCard } from "../../components/post-card/PostCard";
import { useContext, useEffect, useState } from "react";
import { BookmarkContext } from "../../context/BookmarkContext";

export const Bookmark = () => {
  const { bookmark } = useContext(BookmarkContext);
  const [posts, setPosts] = useState([]);

  const filteredPost = posts.filter((post) =>
    bookmark.some(({ _id }) => post._id === _id)
  );

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
  }, [posts]);
  return (
    <>
      <div className="home-main-container">
        <TopNavbar />
        <SideNavbar />
        <div className="feed-container">
          {filteredPost.length === 0 && <p>No Bookmarks</p>}

          {filteredPost.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        <SuggestionTab />
        <BottomNavbar />
      </div>
    </>
  );
};
