export const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isAuthLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};
