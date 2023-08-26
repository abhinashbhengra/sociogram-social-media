import "./searchResult.css";
import { useNavigate } from "react-router-dom";

export const SearchResult = ({ user }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="result-main-container">
        <div>
          <img src={user.profileAvatar} alt="" width={20} />
        </div>
        <div>
          <p>{user.fullName}</p>
          <p>{user.username}</p>
        </div>
      </div> */}
      <div className="suggestion-container searched-user" key={user._id}>
        <div className="picture-username-fullname">
          <div
            className="suggestion-user-picture"
            onClick={() => navigate(`/profile/${user.username}`)}
          >
            <img src={user.profileAvatar} alt={user.username} />
          </div>
          <div
            className="suggestion-user-name-username"
            onClick={() => navigate(`/profile/${user.username}`)}
          >
            <div className="suggestion-user-name">{user.fullName}</div>
            <div className="suggestion-user-username">{user.username}</div>
          </div>
        </div>
      </div>
    </>
  );
};
