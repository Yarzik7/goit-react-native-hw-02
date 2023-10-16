export const handleCreatePostRejected = (state, { payload }) => {
  state.isPostsLoading = false;
  state.error = payload;
};
