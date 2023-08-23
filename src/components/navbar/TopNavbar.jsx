import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";

export const TopNavbar = () => {
  const [allUser, setAllUser] = useState();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  let displayUser = allUser;

  if (search === "") {
    displayUser = [];
  } else {
    displayUser = allUser.filter((user) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setAllUser(data.users);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, []);
  console.log(displayUser);
  return (
    <>
      <div className="top-nav-main-container">
        <div className="top-nav-logo-container">
          <Link to="/" className="navLink">
            <p style={{ color: "#fff" }} className="text-nav-logo">
              Sociogram
            </p>
          </Link>
        </div>
        <div className="search-suggestion-container">
          <div className="top-nav-search-container">
            <img src="../icons/search02.svg" alt="search" width={20} />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* drop down */}
            <div className="search-result-main-container">
              {displayUser.map((user) => (
                <div>
                  <div>
                    {/* <p>{user.profileAvatar}</p> */}
                    <img
                      src={user.profileAvatar}
                      alt={user.username}
                      width={10}
                    />
                  </div>
                  <div>
                    <p>{user.fullName}</p>
                    <p>{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
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
