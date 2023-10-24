const selectUser = state => state.auth.user;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserAvatar = state => state.auth.user.photoURL;
const selectUserName = state => state.auth.user.displayName;
const selectUserId = state => state.auth.user.uid;
const selectIsAuthLoading = state => state.auth.isAuthLoading;
const selectIsUpdatingUserData = state => state.auth.isUpdatingUserData;

export {
  selectIsLoggedIn,
  selectUser,
  selectUserAvatar,
  selectIsAuthLoading,
  selectIsUpdatingUserData,
  selectUserName,
  selectUserId,
};
