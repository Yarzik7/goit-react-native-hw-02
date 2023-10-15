export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload;
  // state.token = payload.token;
  state.isLoggedIn = true;
  state.isAuthLoading = false;
  state.error = null;
};
