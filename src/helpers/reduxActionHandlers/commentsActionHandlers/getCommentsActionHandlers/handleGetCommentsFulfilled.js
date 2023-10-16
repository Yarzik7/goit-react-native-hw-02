export const handleGetCommentsFulfilled = (state, { payload }) => {
  state.isCommentsLoading = false;
  state.items = payload;
  state.error = null;
};
