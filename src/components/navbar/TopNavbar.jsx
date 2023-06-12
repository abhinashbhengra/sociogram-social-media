import "./navbar.css";

export const TopNavbar = () => {
  return (
    <>
      <div className="top-nav-main-container">
        <div className="top-nav-logo-container">
          <p style={{ color: "white" }}>Zepo</p>
        </div>
        <div className="top-nav-search-container">
          <input type="text" placeholder="Search Users" />
        </div>
      </div>
    </>
  );
};
