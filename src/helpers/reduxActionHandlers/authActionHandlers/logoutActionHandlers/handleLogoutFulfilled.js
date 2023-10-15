export const handleLogoutFulfilled = state => {
  state.user = { uid: null, displayName: null, email: null, photoURL: null };
  // state.token = null;
  state.isLoggedIn = false;
  state.isAuthLoading = false;
  state.error = null;
};
