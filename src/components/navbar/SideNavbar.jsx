import "./navbar.css";

export const SideNavbar = () => {
  return (
    <>
      <div className="side-nav-main-container">
        <div className="side-logo-container">zepo</div>
        <div className="side-home">
          🏠 <span className="icon-text">Home</span>
        </div>
        <div className="side-search-container">
          🔍 <span className="icon-text">Search</span>
        </div>
        <div className="side-explorer">
          🧭 <span className="icon-text">Explore</span>
        </div>
        <div className="side-create-post">
          ➕<span className="icon-text">create</span>
        </div>
        <div className="side-bookmarks">
          🔖<span className="icon-text">bookmarks</span>
        </div>
        <div className="side-profile">
          👨‍🏫<span className="icon-text">profile</span>
        </div>
      </div>
    </>
  );
};
