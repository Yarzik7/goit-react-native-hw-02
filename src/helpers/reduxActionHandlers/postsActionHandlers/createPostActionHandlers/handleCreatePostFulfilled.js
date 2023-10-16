export const handleCreatePostFulfilled = (state, { payload }) => {
  state.isPostsLoading = false;
  state.error = null;
  // state.items.push(payload);
};
