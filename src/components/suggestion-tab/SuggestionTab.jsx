import { useContext, useEffect, useState } from "react";
import "./suggestion-tab.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FollowUnfollowContext } from "../../context/FollowUnfollowContext";

export const SuggestionTab = () => {
  const { authState } = useContext(AuthContext);
  const { followedUser, followUser } = useContext(FollowUnfollowContext);
  const [allUser, setAllUser] = useState();
  const [updatedDetails, setUpdatedDetails] = useState();
  const { user } = authState;
  const following = updatedDetails?.following;

  const navigate = useNavigate();

  const suggestion = allUser
    ?.filter(({ _id }) => _id !== updatedDetails?._id)
    .filter((us) => !following?.find((item) => item.username === us.username));

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

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await fetch(`/api/users/${user._id}`);
        const data = await response.json();
        setUpdatedDetails(data.user);
      } catch (e) {
        console.log(e);
      }
    };
    getUserDetails();
  }, [followedUser]);

  return (
    <>
      {allUser && (
        <div className="suggestion-tab-main-container">
          <p>Suggestion for you</p>
          {suggestion.length < 1 && <p>No suggestions</p>}
          {suggestion.map((user) => (
            <div className="suggestion-container" key={user._id}>
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
              <div
                className="suggestion-follow-button"
                onClick={() => followUser(user._id)}
              >
                Follow
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
