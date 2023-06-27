import "./navbar.css";

import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import { CreatePost } from "../create-post/CreatePost";

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
    height: 200,
    overflow: "hidden",
    border: "none",
  },
};

export const SideNavbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="side-nav-main-container">
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
          ariaHideApp={false}
        >
          <p>Create new post</p>

          <CreatePost close={setModalOpen} />
        </Modal>
        <div className="side-logo-container">Sociogram</div>
        <Link to="/" className="navLink">
          <div className="side-home">
            <img src="../icons/home.svg" alt="home-logo" />
            <span className="icon-text">Home</span>
          </div>
        </Link>
        <div className="side-search-container">
          <img src="../icons/search.svg" alt="search-logo" />
          <span className="icon-text">Search</span>
        </div>
        <Link to="/explore" className="navLink">
          <div className="side-explorer">
            <img src="../icons/explore.svg" alt="explore-logo" />
            <span className="icon-text">Explore</span>
          </div>
        </Link>

        <div className="side-create-post" onClick={() => setModalOpen(true)}>
          <img src="../icons/add.svg" alt="add-logo" />
          <span className="icon-text">create</span>
        </div>
        <Link to="/bookmarks" className="navLink">
          <div className="side-bookmark">
            <img src="../icons/bookmark.svg" alt="bookmark-logo" />
            <span className="icon-text">Bookmarks</span>
          </div>
        </Link>
        <div className="side-profile">
          <div className="side-profile-pic"></div>
          <span className="icon-text">profile</span>
        </div>
      </div>
    </>
  );
};
