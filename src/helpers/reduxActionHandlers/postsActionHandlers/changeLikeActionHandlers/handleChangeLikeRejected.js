export const handleChangeLikeRejected = (state, { payload }) => {
  state.isChangingLike = false;
  state.error = payload;
};
