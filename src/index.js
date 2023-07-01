import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import { LikeUnlikeProvider } from "./context/LikeUnlikeContext";
import { PostProvider } from "./context/PostContext";
import { FollowUnfollowProvider } from "./context/FollowUnfollowContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookmarkProvider>
          <PostProvider>
            <LikeUnlikeProvider>
              <FollowUnfollowProvider>
                <App />
              </FollowUnfollowProvider>
            </LikeUnlikeProvider>
          </PostProvider>
        </BookmarkProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
