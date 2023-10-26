import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { register, logIn, logOutUser, updateUserData } from './operations';
import * as authReducers from '../../helpers/reduxActionHandlers/authActionHandlers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: { uid: null, displayName: null, email: null, photoURL: '' },
  isAuthLoading: false,
  isLogout: false,
  isUpdatingUserData: false,
  isLoggedIn: false,
  error: null,
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
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
      .addCase(logOutUser.pending, authReducers.handleLogoutPending)
      .addCase(logOutUser.fulfilled, authReducers.handleLogoutFulfilled)
      .addCase(logOutUser.rejected, authReducers.handleLogoutRejected)
      .addCase(updateUserData.pending, authReducers.handleUpdateUserPending)
      .addCase(updateUserData.fulfilled, authReducers.handleUpdateUserFulfilled)
      .addCase(updateUserData.rejected, authReducers.handleUpdateUserRejected),
});

const authReducer = authSlice.reducer;

export const persistAuthReducer = persistReducer(authPersistConfig, authReducer);
