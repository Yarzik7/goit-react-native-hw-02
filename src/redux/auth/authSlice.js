import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { register, logIn, logOutUser, updateUserData, refreshUser } from './operations';
import * as authReducers from '../../helpers/reduxActionHandlers/authActionHandlers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: { uid: null, displayName: null, email: null, photoURL: null },
  isAuthLoading: false,
  isUpdatingUserData: false,
  isLoggedIn: false,
  error: null,
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  // whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, authReducers.handleAuthActionPending)
      .addCase(register.fulfilled, authReducers.handleRegisterFulfilled)
      .addCase(register.rejected, authReducers.handleRegisterRejected)
      .addCase(logIn.pending, authReducers.handleAuthActionPending)
      .addCase(logIn.fulfilled, authReducers.handleLoginFulfilled)
      .addCase(logIn.rejected, authReducers.handleLoginRejected)
      .addCase(logOutUser.pending, authReducers.handleAuthActionPending)
      .addCase(logOutUser.fulfilled, authReducers.handleLogoutFulfilled)
      .addCase(logOutUser.rejected, authReducers.handleLogoutRejected)
      .addCase(updateUserData.pending, authReducers.handleUpdateUserPending)
      .addCase(updateUserData.fulfilled, authReducers.handleUpdateUserFulfilled)
      .addCase(updateUserData.rejected, authReducers.handleUpdateUserRejected),
  // .addCase(refreshUser.pending, authReducers.handleRefreshUserPending)
  // .addCase(refreshUser.fulfilled, authReducers.handleRefreshUserFulfilled)
  // .addCase(refreshUser.rejected, authReducers.handleRefreshUserRejected),
});

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.isLoggedIn = true;
//     },
//     // [register.rejected]: handleRejected,

//     [logIn.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.isLoggedIn = true;
//     },
//     // [logIn.rejected]: handleRejected,

//     [logOutUser.fulfilled](state) {
//       state.user = { uid: null, displayName: null, email: null, photoURL: null };
//       state.isLoggedIn = false;
//     },
//     // [logOutUser.rejected]: handleRejected,

//     [updateUser.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.isLoggedIn = true;
//     },
//     // [updateUser.rejected]: handleRejected,
//   },
// });

const authReducer = authSlice.reducer;

export const persistAuthReducer = persistReducer(authPersistConfig, authReducer);
