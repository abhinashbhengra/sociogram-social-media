import { Link } from "react-router-dom";
import "./suggestions.css";
import { useContext, useEffect, useState } from "react";
// import "./suggestion-tab.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FollowUnfollowContext } from "../../context/FollowUnfollowContext";

export const Suggestions = () => {
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
  console.log("check", suggestion);
  return (
    <div className="suggestion-main-container">
      <nav className="suggestion-page-nav">
        <span className="back-icon">
          <Link to={"/"}>
            <img src="../icons/back.svg" alt="back" width={20} />
          </Link>
        </span>
        <p className="discover-people">Discover People</p>
      </nav>
      <section>
        <p className="suggested-text">Suggested</p>
        <div>
          {allUser && (
            <div className="suggestion-main-container">
              {suggestion.map((user) => (
                <div className="suggestion-container" key={user._id}>
                  <div className="profile-name-username">
                    <div
                      className="suggestion-user-picture"
                      onClick={() => navigate(`/profile/${user.username}`)}
                    >
                      <img src={user.profileAvatar} alt={user.username} />
                    </div>
                    <div
                      className=""
                      onClick={() => navigate(`/profile/${user.username}`)}
                    >
                      <div className="suggestions-fullname">
                        {user.fullName}
                      </div>
                      <div className="suggestions-username">
                        {user.username}
                      </div>
                    </div>
                  </div>

                  <p
                    className="suggestion-follow-btn"
                    onClick={() => followUser(user._id)}
                  >
                    Follow
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
