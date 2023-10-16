export const handleGetCommentsRejected = (state, { payload }) => {
  state.isCommentsLoading = false;
  state.error = payload;
};
