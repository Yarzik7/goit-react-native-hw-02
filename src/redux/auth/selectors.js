const selectUser = state => state.auth.user;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserAvatar = state => state.auth.user.photoURL;

export { selectIsLoggedIn, selectUser, selectUserAvatar };
