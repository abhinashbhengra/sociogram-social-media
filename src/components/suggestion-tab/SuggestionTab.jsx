import { useContext, useEffect, useState } from "react";
import "./suggestion-tab.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const SuggestionTab = () => {
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const { following } = user;
  const [allUser, setAllUser] = useState([]);

  const navigate = useNavigate();

  const suggestion = allUser
    .filter(({ _id }) => _id !== user._id)
    .filter((us) => !following.find((item) => item.username === us.username));

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
    <>
      <div className="suggestion-tab-main-container">
        <p>Suggestion for you</p>
        {suggestion.map((user) => (
          <div className="suggestion-container" key={user._id}>
            <div
              className="suggestion-user-picture"
              onClick={() => navigate(`/profile/${user.username}`)}
            ></div>
            <div
              className="suggestion-user-name-username"
              onClick={() => navigate(`/profile/${user.username}`)}
            >
              <div className="suggestion-user-name">{user.fullName}</div>
              <div className="suggestion-user-username">{user.username}</div>
            </div>
            <div className="suggestion-follow-button">Follow</div>
          </div>
        ))}
      </div>
    </>
  );
};
