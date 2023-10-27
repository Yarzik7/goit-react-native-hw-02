export const handleChangeLikeFulfilled = (state, { payload: { postId, likesCount, likers } }) => {
  state.isChangingLike = false;
  const postIndex = state.items.findIndex(({ id }) => id === postId);
  state.items[postIndex] = {
    ...state.items[postIndex],
    likesCount,
    likers,
  };
  state.error = null;
};
