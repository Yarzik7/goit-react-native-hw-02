export const handleLogoutFulfilled = state => {
  state.user = { uid: null, displayName: null, email: null, photoURL: null };
  state.isLoggedIn = false;
  state.isLogout = false;
  state.error = null;
};
