import { useContext, useEffect, useState } from "react";
import "./suggestion-tab.css";
import { AuthContext } from "../../context/AuthContext";

export const SuggestionTab = () => {
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const { following } = user;
  const [allUser, setAllUser] = useState([]);
  console.log(authState);

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

  console.log(suggestion);
  // console.log(following);
  return (
    <>
      <div className="suggestion-tab-main-container">
        <p>Suggestion for you</p>
        <div>
          <p>Profile_name</p>
          <span>Follow</span>
        </div>
        <div>
          <p>Profile_name</p>
          <span>Follow</span>
        </div>
        <div>
          <p>Profile_name</p>
          <span>Follow</span>
        </div>
        <div>
          <p>Profile_name</p>
          <span>Follow</span>
        </div>
      </div>
    </>
  );
};
