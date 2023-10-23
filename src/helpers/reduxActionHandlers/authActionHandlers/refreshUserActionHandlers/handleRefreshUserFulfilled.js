export const handleRefreshUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isAuthLoading = false;
  state.isRefreshingUser = false;
  state.error = null;
};
