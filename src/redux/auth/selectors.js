const selectUser = state => state.auth.user;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserAvatar = state => state.auth.user.photoURL;
const selectIsAuthLoading = state => state.auth.isAuthLoading;

export { selectIsLoggedIn, selectUser, selectUserAvatar, selectIsAuthLoading };
