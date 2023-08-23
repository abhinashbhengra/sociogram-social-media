import { Link } from "react-router-dom";
import "./navbar.css";

export const TopNavbar = () => {
  return (
    <>
      <div className="top-nav-main-container">
        <div className="top-nav-logo-container">
          <Link to="/" className="navLink">
            <p style={{ color: "#fff" }}>Sociogram</p>
          </Link>
        </div>
        <div className="search-suggestion-container">
          <div className="top-nav-search-container">
            <img src="../icons/search02.svg" alt="search" width={20} />
            <input type="text" placeholder="Search" />
          </div>
          <div className="suggestion-container">
            <Link to="/suggestions">
              <img src="../icons/user-plus.svg" alt="add-user" width={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
