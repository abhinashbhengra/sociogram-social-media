export const removeFromBookmark = async (token, postId) => {
  try {
    const response = await fetch(`/api/users/remove-bookmark/${postId}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
    });
    const data = await response.json();
    return data.bookmarks;
  } catch (e) {
    console.log(e);
  }
};
