export const handleChangeLikeFulfilled = (state, { payload }) => {
  state.isChangingLike = false;
  const postIndex = state.items.findIndex(({ id }) => id === payload.postId);
  state.items[postIndex] = { ...state.items[postIndex], likesCount: payload.likesCount };
  state.error = null;
};
