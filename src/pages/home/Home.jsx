import "./home.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";
import { PostCard } from "../../components/post-card/PostCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { filteredPosts } from "../../utils/filters/filters";
import { PostContext } from "../../context/PostContext";

export const Home = () => {
  const { posts } = useContext(PostContext);
  const [sortBy, setSortBy] = useState("All");
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const { following } = user;

  const [showFilter, setShowFilter] = useState(false);

  const [allUsers, setAllUsers] = useState([]);

  const followingUserPost = posts?.filter((post) => {
    return following?.some(
      (followingUser) => followingUser?.username === post?.username
    );
  });

  const userPost = posts?.filter((post) => post.username === user.username);

  const allPost = [...followingUserPost, ...userPost];

  const sortedPost = filteredPosts(allPost, sortBy);

  const handleSortByValue = (value) => {
    setSortBy(value);
    setShowFilter(false);
  };

  const handleFiltersOption = () => {
    setShowFilter(true);
  };

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
    <div className="home-main-container">
      <TopNavbar />
      <SideNavbar />
      <div className="feed-container">
        <div className="user-feed-filter-container">
          <p>{sortBy} Post</p>
          <img
            src="https://ik.imagekit.io/u6itcrvxy/Social-Media-icons/filters-2-svgrepo-com__1_.svg?updatedAt=1686916215904"
            alt="filters-logo"
            width="25px"
            height="25px"
            style={{ cursor: "pointer" }}
            onClick={handleFiltersOption}
          />
          <div
            className="filters-main-container"
            style={{ display: showFilter ? "block" : "none" }}
          >
            <div
              className="filter-button"
              onClick={() => handleSortByValue("All")}
            >
              All
            </div>
            <div
              className="filter-button"
              onClick={() => handleSortByValue("Trending")}
            >
              Trending
            </div>
            <div
              className="filter-button"
              onClick={() => handleSortByValue("Latest")}
            >
              Latest
            </div>
            <div
              className="filter-button"
              onClick={() => handleSortByValue("Oldest")}
            >
              Oldest
            </div>
            <img
              className="filter-cancel-button"
              src="./icons/cancel.svg"
              alt="cancel"
              onClick={() => setShowFilter(false)}
            />
          </div>
        </div>
        {sortedPost.reverse().map((post) => (
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
  );
};
