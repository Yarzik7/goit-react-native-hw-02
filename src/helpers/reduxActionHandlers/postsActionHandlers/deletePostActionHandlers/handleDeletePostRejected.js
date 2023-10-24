export const handleDeletePostRejected = (state, { payload }) => {
  state.isDeletingPost = false;
  state.currentPostId = null;
  state.error = payload;
};
