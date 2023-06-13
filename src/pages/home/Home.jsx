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
