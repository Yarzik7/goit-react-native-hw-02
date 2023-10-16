export const handleGetPostsFulfilled = (state, { payload }) => {
  state.isPostsLoading = false;
  state.items = payload;
  state.error = null;
};
