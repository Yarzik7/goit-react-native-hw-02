export const handleDeletePostPending = (state, action) => {
  state.isDeletingPost = true;
  state.currentPostId = action.meta.arg.postId;
};
