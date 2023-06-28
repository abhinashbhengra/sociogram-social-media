import "./profileTab.css";
import Modal from "react-modal";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PostContext } from "../../context/PostContext";
import { useParams } from "react-router-dom";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.70)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#262626",
    color: "#a5a5a5",
    width: 500,
    height: "auto",
    overflow: "hidden",
    border: "none",
  },
};

export const ProfileTab = () => {
  const { authState, handleEdit, handleLogout } = useContext(AuthContext);
  const { user, token } = authState;
  //   const {
  //     user: { username, followers, following, bio, website, profileAvatar },
  //   } = authState;
  const [userDetails, setUserDetails] = useState({
    profileAvatar: null,
    bio: null,
    website: null,
  });

  const { posts } = useContext(PostContext);

  const { selectedUsername } = useParams();

  const [allUsers, setAllUsers] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const userPosts = posts.filter((post) => post.username === selectedUsername);

  const filteredUser = allUsers.find(
    (user) => user.username === selectedUsername
  );

  //   const { username, followers, following, bio, website, profileAvatar } =
  //     filteredUser;

  const saveButtonHandler = () => {
    handleEdit(userDetails, token);
    setModalOpen(false);
  };

  useEffect(() => {
    setUserDetails((curr) => ({
      ...curr,
      profileAvatar: filteredUser?.profileAvatar,
      bio: filteredUser?.bio,
      website: filteredUser?.website,
    }));
  }, [filteredUser]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setAllUsers(data.users);
      } catch (e) {
        console.log(e);
      }
    };
    getAllUsers();
  }, [user]);

  //   console.log(profileAvatar);

  return (
    <div className="profile-tab-main-container">
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <p>Edit Profile</p>
        <div className="edit-user-profile-container">
          <div className="profile-picture-edit-container">
            <div className="edit-picture">
              <img
                src={userDetails?.profileAvatar}
                alt={filteredUser?.username}
              />
            </div>
            <div>
              <p>{filteredUser?.username}</p>
              <p>Change profile avator</p>
            </div>
          </div>
          <div className="website-edit-container">
            <p>Website</p>
            <input
              type="text"
              name="website"
              value={userDetails?.website}
              onChange={(e) =>
                setUserDetails((curr) => ({ ...curr, website: e.target.value }))
              }
            />
          </div>
          <div className="bio-edit-container">
            <p>Bio</p>
            <textarea
              name="bio"
              value={userDetails?.bio}
              onChange={(e) =>
                setUserDetails((curr) => ({ ...curr, bio: e.target.value }))
              }
              cols="3"
              rows="3"
            ></textarea>
          </div>
          <button className="save-button" onClick={saveButtonHandler}>
            Save
          </button>
        </div>

        {/* <CreatePost close={setModalOpen} /> */}
      </Modal>
      <div className="profile-picture-container">
        <div className="profile-section-picture">
          <img src={filteredUser?.profileAvatar} alt={filteredUser?.username} />
        </div>
      </div>
      <div className="profile-details-container">
        <div className="profile-username-edit-container">
          <div>{filteredUser?.username}</div>
          <div>
            <button onClick={() => setModalOpen(true)}>Edit</button>
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        </div>
        <div className="post-followers-following-container">
          <p>
            {userPosts?.length < 2
              ? `${userPosts?.length} post`
              : `${userPosts?.length} posts`}
          </p>
          <p>
            {filteredUser?.followers?.length < 2
              ? `${filteredUser?.followers?.length} follower`
              : `${filteredUser?.followers?.length} followers`}
          </p>
          <p>{filteredUser?.following?.length} following</p>
        </div>
        <div className="profile-bio-link-container">
          <p>{filteredUser?.bio}</p>
          <p className="website-link">
            <a href={filteredUser?.website} target="blank">
              {filteredUser?.website?.slice(8)}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
