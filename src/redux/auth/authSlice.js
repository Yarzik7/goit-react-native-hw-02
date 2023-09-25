import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { register, logIn, logOutUser, updateUser } from './operations';
import { handleRejected } from '../../helpers/extraReducerHandlers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: { uid: null, displayName: null, email: null, photoURL: null },
  isLoggedIn: false,
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
    // [register.rejected]: handleRejected,

    [logIn.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
    // [logIn.rejected]: handleRejected,

    [logOutUser.fulfilled](state) {
      state.user = { uid: null, displayName: null, email: null, photoURL: null };
      state.isLoggedIn = false;
    },
    // [logOutUser.rejected]: handleRejected,

    [updateUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
    // [updateUser.rejected]: handleRejected,
  },
});

const authReducer = authSlice.reducer;

export const persistAuthReducer = persistReducer(authPersistConfig, authReducer);
