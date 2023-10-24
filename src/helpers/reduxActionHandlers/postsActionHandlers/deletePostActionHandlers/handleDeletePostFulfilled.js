export const handleDeletePostFulfilled = state => {
  state.isDeletingPost = false;
  state.currentPostId = null;
  state.error = null;
};
