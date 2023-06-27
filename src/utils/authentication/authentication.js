export const login = async (user) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
    });
    const userDetails = await response.json();
    return userDetails;
  } catch (e) {
    console.log(e);
  }
};

export const signup = async (user) => {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(user),
    });
    const userDetails = await response.json();
    return userDetails;
  } catch (e) {
    console.log(e);
  }
};

export const editUser = async (userData, token) => {
  try {
    const response = await fetch("/api/users/edit", {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ userData }),
    });
    const data = await response.json();
    return data.user;
  } catch (e) {
    console.log(e);
  }
};
