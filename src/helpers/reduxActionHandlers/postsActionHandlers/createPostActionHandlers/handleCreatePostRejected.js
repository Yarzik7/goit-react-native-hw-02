export const handleCreatePostRejected = (state, { payload }) => {
  state.isCreatingPost = false;
  state.error = payload;
};
