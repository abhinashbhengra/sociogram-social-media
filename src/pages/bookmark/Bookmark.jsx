import "./bookmark.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";
import { PostCard } from "../../components/post-card/PostCard";
import { useContext, useEffect, useState } from "react";
import { BookmarkContext } from "../../context/BookmarkContext";
import { PostContext } from "../../context/PostContext";
import { AuthContext } from "../../context/AuthContext";

import { InfinitySpin } from "react-loader-spinner";

export const Bookmark = () => {
  const [allUsers, setAllUsers] = useState();
  const { authState } = useContext(AuthContext);
  const { bookmark } = useContext(BookmarkContext);
  const { posts } = useContext(PostContext);

  const { user } = authState;

  const filteredPost = posts.filter((post) =>
    bookmark.some(({ _id }) => post._id === _id)
  );

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
  }, []);

  return (
    <>
      <div className="home-main-container">
        <TopNavbar />
        <SideNavbar />
        <div className="feed-container">
          {!allUsers ? (
            <InfinitySpin width="200" color="#fff" />
          ) : (
            <>
              {filteredPost?.length === 0 && <p>No Bookmarks</p>}

              {filteredPost?.map((post) => (
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
            </>
          )}
        </div>
        <SuggestionTab />
        <BottomNavbar />
      </div>
    </>
  );
};
