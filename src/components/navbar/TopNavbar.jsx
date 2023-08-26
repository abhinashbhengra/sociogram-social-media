import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect, useContext } from "react";
import { SearchResult } from "../search-result/SearchResult";
import { AuthContext } from "../../context/AuthContext";

export const TopNavbar = () => {
  const [allUser, setAllUser] = useState();
  const [search, setSearch] = useState("");
  const [searchUser, setSearchUser] = useState();
  const { authState } = useContext(AuthContext);

  const navigate = useNavigate();

  const filteredUser = allUser?.filter(
    (user) => user.username !== authState.user.username
  );

  const handleSearch = () => {
    const searchedUsser = filteredUser?.filter((user) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );

    setSearchUser(searchedUsser);

    // setInput("");
  };

  const clearSearch = () => {
    setSearch("");
  };

  useEffect(() => {
    let id;
    id = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [search]);

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
  // console.log(filteredUser);
  // console.log(authState);
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
            {search.length < 1 ? (
              <img src="../icons/search02.svg" alt="search" width={20} />
            ) : (
              <img
                src="../icons/close.svg"
                alt="close"
                width={18}
                style={{ cursor: "pointer" }}
                onClick={() => clearSearch()}
              />
            )}
            {/* <img src="../icons/search02.svg" alt="search" width={20} /> */}

            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="suggestion-container">
            <Link to="/suggestions">
              <img src="../icons/user-plus.svg" alt="add-user" width={20} />
            </Link>
          </div>
          {/* drop down */}
          {search.length !== 0 && (
            <div className="search-result-main-container">
              {searchUser?.map((user) => (
                <div key={user.id}>
                  <SearchResult user={user} clearSearch={clearSearch} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
