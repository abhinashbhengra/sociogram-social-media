import "./bookmark.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";
import { PostCard } from "../../components/post-card/PostCard";
import { useContext, useEffect, useState } from "react";
import { BookmarkContext } from "../../context/BookmarkContext";
import { PostContext } from "../../context/PostContext";

export const Bookmark = () => {
  const { bookmark } = useContext(BookmarkContext);
  const { posts } = useContext(PostContext);

  const filteredPost = posts.filter((post) =>
    bookmark.some(({ _id }) => post._id === _id)
  );

  return (
    <>
      <div className="home-main-container">
        <TopNavbar />
        <SideNavbar />
        <div className="feed-container">
          {filteredPost?.length === 0 && <p>No Bookmarks</p>}

          {filteredPost?.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        <SuggestionTab />
        <BottomNavbar />
      </div>
    </>
  );
};
