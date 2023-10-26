export const handleLogoutRejected = (state, { payload }) => {
  state.isLogout = false;
  state.error = payload;
};
