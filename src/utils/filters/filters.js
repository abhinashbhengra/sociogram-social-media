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
      return [...post].sort((a, b) => {
        const a_Details = a.comments.length + a.likes.likesCount;
        const b_Details = b.comments.length + b.likes.likesCount;

        return b_Details - a_Details;
      });
  }
};
