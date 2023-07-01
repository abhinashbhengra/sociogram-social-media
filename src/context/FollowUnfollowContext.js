import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const FollowUnfollowContext = createContext({
  followUnfollowState: [],
  followUnfollowDispatch: () => {},
});

export const FollowUnfollowProvider = ({ children }) => {
  const [followedUser, setFollowedUser] = useState([]);

  const { authState } = useContext(AuthContext);
  const { token } = authState;

  const followUser = async (userId) => {
    try {
      const response = await fetch(`/api/users/follow/${userId}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      const user = data.user;
      const followingUser = user.following.map((user) => user.username);
      setFollowedUser(followingUser);
    } catch (e) {
      console.log(e);
    }
  };

  const unfollowUser = async (userId) => {
    try {
      const response = await fetch(`/api/users/unfollow/${userId}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      const user = data.user;
      const followingUser = user.following.map((user) => user.username);
      setFollowedUser(followingUser);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FollowUnfollowContext.Provider value={{ followUser, unfollowUser }}>
      {children}
    </FollowUnfollowContext.Provider>
  );
};
