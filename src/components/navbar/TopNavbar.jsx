import { Link } from "react-router-dom";
import "./navbar.css";

export const TopNavbar = () => {
  return (
    <>
      <div className="top-nav-main-container">
        <div className="top-nav-logo-container">
          <Link to="/" className="navLink">
            <p style={{ color: "#a5a5a5" }}>Sociogram</p>
          </Link>
        </div>
        {/* <div className="top-nav-search-container">
          <input type="text" placeholder="Search Users" />
        </div> */}
      </div>
    </>
  );
};
