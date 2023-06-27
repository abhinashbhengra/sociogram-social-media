import "./profile.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";
import { PostCard } from "../../components/post-card/PostCard";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/PostContext";
import { AuthContext } from "../../context/AuthContext";
import { ProfileTab } from "../../components/profile-tab/ProfileTab";

export const Profile = () => {
  const { posts } = useContext(PostContext);
  const { authState } = useContext(AuthContext);
  const { user } = authState;

  const filteredPosts = posts.filter((post) => post.username === user.username);

  return (
    <>
      <div className="home-main-container">
        <TopNavbar />
        <SideNavbar />
        <div className="post-container">
          <ProfileTab />
          {filteredPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        <SuggestionTab />
        <BottomNavbar />
      </div>
    </>
  );
};
