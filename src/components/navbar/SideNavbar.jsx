import "./navbar.css";

export const SideNavbar = () => {
  return (
    <>
      <div className="side-nav-main-container">
        <div className="side-logo-container">zepo</div>
        <div className="side-home">
          <img src="../icons/home.svg" alt="home-logo" />
          <span className="icon-text">Home</span>
        </div>
        <div className="side-search-container">
          <img src="../icons/search.svg" alt="search-logo" />
          <span className="icon-text">Search</span>
        </div>
        <div className="side-explorer">
          <img src="../icons/explore.svg" alt="explore-logo" />
          <span className="icon-text">Explore</span>
        </div>
        <div className="side-create-post">
          <img src="../icons/add.svg" alt="add-logo" />
          <span className="icon-text">create</span>
        </div>
        <div className="side-bookmarks">
          <img src="../icons/bookmark.svg" alt="bookmark-logo" />
          <span className="icon-text">bookmarks</span>
        </div>
        <div className="side-profile">
          <div className="side-profile-pic"></div>
          <span className="icon-text">profile</span>
        </div>
      </div>
    </>
  );
};
