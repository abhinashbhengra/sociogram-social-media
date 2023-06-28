import "./profile.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import { SideNavbar } from "../../components/navbar/SideNavbar";
import { SuggestionTab } from "../../components/suggestion-tab/SuggestionTab";
import { ProfileTab } from "../../components/profile-tab/ProfileTab";

export const Profile = () => {
  return (
    <>
      <div className="home-main-container">
        <TopNavbar />
        <SideNavbar />
        <div className="post-container">
          <ProfileTab />
        </div>
        <SuggestionTab />
        <BottomNavbar />
      </div>
    </>
  );
};
