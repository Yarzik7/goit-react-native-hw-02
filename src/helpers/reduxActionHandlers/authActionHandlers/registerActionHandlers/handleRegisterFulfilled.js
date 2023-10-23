export const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuthLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};
