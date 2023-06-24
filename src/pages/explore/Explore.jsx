import "./explore.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";
import { PostCard } from "../../components/post-card/PostCard";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/PostContext";

export const Explore = () => {
  // const [posts, setPosts] = useState([]);
  const { posts } = useContext(PostContext);

  // useEffect(() => {
  //   const getPost = async () => {
  //     try {
  //       const response = await fetch("/api/posts");
  //       const data = await response.json();
  //       setPosts(data.posts);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getPost();
  // }, [posts]);
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
