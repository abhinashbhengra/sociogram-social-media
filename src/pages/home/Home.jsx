import "./home.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";
import { PostCard } from "../../components/post-card/PostCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const { following } = user;

  const followingUserPost = posts.filter((post) => {
    return following.some(
      (followingUser) => followingUser.username === post.username
    );
  });

  const userPost = posts?.filter((post) => post.username === user.username);

  const allPost = [...userPost, ...followingUserPost];

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

  // console.log("home-post", posts);
  // console.log("user", user);
  // console.log("fol-post", followingUserPost);
  console.log("user-post", userPost);

  return (
    <>
      <div className="home-main-container">
        <TopNavbar />
        <SideNavbar />
        <div className="feed-container">
          <div className="create-post-container">
            <div className="profile-input-container">
              <div className="profile-picture"></div>
              <input type="text" placeholder="what's happening?" />
            </div>
            <div className="create-post-buttons">
              <button>Add photo</button>
              <button>post</button>
            </div>
          </div>
          <div className="user-feed-filter-container">
            <p>Trending Post</p>
            <img
              src="https://ik.imagekit.io/u6itcrvxy/Social-Media-icons/filters-2-svgrepo-com__1_.svg?updatedAt=1686916215904"
              alt="filters-logo"
              width="25px"
              height="25px"
            />
          </div>
          {allPost?.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        <SuggestionTab />
        <BottomNavbar />
      </div>
    </>
  );
};
