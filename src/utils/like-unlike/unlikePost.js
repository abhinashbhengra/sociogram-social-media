export const unlikePost = async (token, postId) => {
  try {
    const response = await fetch(`/api/posts/dislike/${postId}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
    });
    const data = await response.json();
    return data.posts;
  } catch (e) {
    console.log(e);
  }
};
