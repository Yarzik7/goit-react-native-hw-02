const selectPosts = state => state.posts.items;
const selectIsPostsLoading = state => state.posts.isPostsLoading;
const selectIsCreatingPost = state => state.posts.isCreatingPost;
const selectIsDeletingPost = state => state.posts.isDeletingPost;

export { selectPosts, selectIsPostsLoading, selectIsCreatingPost, selectIsDeletingPost };
