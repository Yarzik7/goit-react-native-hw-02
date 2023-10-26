export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.isAuthLoading = false;
  state.error = null;
};
