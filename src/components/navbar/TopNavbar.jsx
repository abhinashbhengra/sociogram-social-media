import "./navbar.css";

export const TopNavbar = () => {
  return (
    <>
      <div className="top-nav-main-container">
        <div className="top-nav-logo-container">Zepo</div>
        <div className="top-nav-search-container">
          <input type="text" placeholder="Search Users" />
        </div>
      </div>
    </>
  );
};
