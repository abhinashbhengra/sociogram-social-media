import "./searchResult.css";
import { useNavigate } from "react-router-dom";

export const SearchResult = ({ user, clearSearch, close }) => {
  const navigate = useNavigate();
  const handleSearch = (username) => {
    navigate(`/profile/${username}`);
    clearSearch();
    if (close) {
      close();
    }
  };
  return (
    <>
      {!user.username.length === 0 && <p>no users found!!!</p>}
      <div className="suggestion-container searched-user" key={user._id}>
        <div className="picture-username-fullname">
          <div
            className="suggestion-user-picture"
            onClick={() => handleSearch(user.username)}
          >
            <img src={user.profileAvatar} alt={user.username} />
          </div>
          <div
            className="suggestion-user-name-username"
            onClick={() => handleSearch(user.username)}
          >
            <div className="suggestion-user-name">{user.fullName}</div>
            <div className="suggestion-user-username">{user.username}</div>
          </div>
        </div>
      </div>
    </>
  );
};
