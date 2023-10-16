export const handleCreateCommentFulfilled = (state, { payload }) => {
  state.isCreatingComment = false;
  state.error = null;
  state.items.push(payload);
};
