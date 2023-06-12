import "./home.css";

import { BottomNavbar } from "../../components/navbar/BottomNavbar";
import { TopNavbar } from "../../components/navbar/TopNavbar";

export const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <TopNavbar />
        <h2>This is home page</h2>
        <BottomNavbar />
      </div>
    </>
  );
};
