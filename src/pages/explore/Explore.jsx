import "./explore.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";
import { PostCard } from "../../components/post-card/PostCard";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/PostContext";
import { AuthContext } from "../../context/AuthContext";

export const Explore = () => {
  const { authState } = useContext(AuthContext);
  const { posts } = useContext(PostContext);
  const [allUsers, setAllUsers] = useState([]);

  const { user } = authState;

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setAllUsers(data.users);
      } catch (e) {
        console.log(e);
      }
    };
    getAllUsers();
  }, [posts]);
  return (
    <>
      <div className="home-main-container">
        <TopNavbar />
        <SideNavbar />
        <div className="feed-container">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              profileAvatar={
                post.username === user.username
                  ? user?.profileAvatar
                  : allUsers.find((user) => user.username === post.username)
                      ?.profileAvatar
              }
            />
          ))}
        </div>
        <SuggestionTab />
        <BottomNavbar />
      </div>
    </>
  );
};
