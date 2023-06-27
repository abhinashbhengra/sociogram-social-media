export const filteredPosts = (post, sortBy) => {
  switch (sortBy) {
    case "All":
      return post;
    case "Latest":
      return [...post].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case "Oldest":
      return [...post].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case "Trending":
      return [...post].sort((a, b) => a.likes.likeCount - b.likes.likeCount);
  }
};
