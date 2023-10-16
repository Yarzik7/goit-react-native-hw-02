export const handleGetPostsRejected = (state, { payload }) => {
  state.isPostsLoading = false;
  state.error = payload;
};
