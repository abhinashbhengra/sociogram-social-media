import "./home.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";

export const Home = () => {
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
          <h3>feed1</h3>
          <h3>feed2</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
          <h3>feed3</h3>
        </div>
        <SuggestionTab />
        <BottomNavbar />
      </div>
    </>
  );
};
