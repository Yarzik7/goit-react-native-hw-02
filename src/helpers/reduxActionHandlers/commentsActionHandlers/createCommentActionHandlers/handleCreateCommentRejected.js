export const handleCreateCommentRejected = (state, { payload }) => {
  state.isCreatingComment = false;
  state.error = payload;
};
