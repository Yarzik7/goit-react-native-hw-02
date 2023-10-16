const selectPosts = state => state.posts.items;
const selectIsPostsLoading = state => state.posts.isPostsLoading;
const selectIsCreatingPost = state => state.posts.isCreatingPost;

export { selectPosts, selectIsPostsLoading, selectIsCreatingPost };
