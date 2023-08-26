const localToken = localStorage.getItem("token");
const localUser = JSON.parse(localStorage.getItem("user"));

export const authInitial = {
  user: localUser !== null ? localUser : "",
  token: localToken !== null ? localToken : "",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.user,
        token: action.payload.token,
      };
    case "SIGNUP":
      return {
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        user: "",
        token: "",
      };

    case "EDIT":
      return {
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
