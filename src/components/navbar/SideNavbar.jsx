import "./navbar.css";

export const SideNavbar = () => {
  return (
    <>
      <div className="side-nav-main-container">
        <div className="side-logo-container">zepo</div>
        <div className="side-home">🏠</div>
        <div className="side-explorer">🧭</div>
        <div className="side-create-post">➕</div>
        <div className="side-bookmarks">🔖</div>
        <div className="side-profile">👨‍🏫</div>
        <div className="side-profile-details">
          <p>Abhinash Bhengra</p>
          <p>abhinashbhengra</p>
        </div>
      </div>
    </>
  );
};
