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
