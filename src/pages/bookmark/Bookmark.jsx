import "./bookmark.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";
import { PostCard } from "../../components/post-card/PostCard";
import { useEffect, useState } from "react";

export const Bookmark = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        console.log(data.posts);
        setPosts(data.posts);
      } catch (e) {
        console.log(e);
      }
    };
    getPost();
  }, []);
  return (
    <>
      <div className="home-main-container">
        <TopNavbar />
        <SideNavbar />
        <div className="feed-container">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        <SuggestionTab />
        <BottomNavbar />
      </div>
    </>
  );
};
