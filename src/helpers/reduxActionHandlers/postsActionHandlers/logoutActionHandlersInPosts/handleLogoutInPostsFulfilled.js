export const handleLogoutInPostsFulfilled = state => {
  state.isPostsLoading = false;
  state.items = [];
  state.error = null;
};
