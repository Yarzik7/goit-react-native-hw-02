const selectPosts = state => state.posts.items;
const selectIsPostsLoading = state => state.posts.isPostsLoading;
const selectIsCreatingPost = state => state.posts.isCreatingPost;
const selectIsDeletingPost = state => state.posts.isDeletingPost;
const selectCurrentPostId = state => state.posts.currentPostId;

export { selectPosts, selectIsPostsLoading, selectIsCreatingPost, selectIsDeletingPost, selectCurrentPostId };
