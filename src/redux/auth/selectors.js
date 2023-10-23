const selectUser = state => state.auth.user;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserAvatar = state => state.auth.user.photoURL;
const selectIsAuthLoading = state => state.auth.isAuthLoading;
const selectIsUpdatingUserData = state => state.auth.isUpdatingUserData;
const selectIsRefreshingUser = state => state.auth.isRefreshingUser;

export {
  selectIsLoggedIn,
  selectUser,
  selectUserAvatar,
  selectIsAuthLoading,
  selectIsUpdatingUserData,
  selectIsRefreshingUser,
};
