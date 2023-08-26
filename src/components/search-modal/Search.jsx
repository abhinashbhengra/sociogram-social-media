import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SearchResult } from "../search-result/SearchResult";

export const SearchModal = ({ close }) => {
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
    // close();
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
  return (
    <div className="search-modal-main-container">
      <div className="top-nav-main-containers">
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
        </div>
      </div>
      <div className="searched-body">
        {search.length !== 0 && (
          <div className="search-result-main-containers">
            {searchUser?.map((user) => (
              <div key={user.id}>
                <SearchResult
                  user={user}
                  clearSearch={clearSearch}
                  close={close}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
