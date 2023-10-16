export const handleCreatePostFulfilled = (state, { payload }) => {
  state.isCreatingPost = false;
  state.error = null;
  state.items.push(payload);
};
