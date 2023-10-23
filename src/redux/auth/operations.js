import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerDB, loginDB, logOut, updateUserProfile, authWithToken } from '../../firebase/auth';
import { handleErrorAsyncOperation } from '../../helpers/handleErrorAsyncOperation';

const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const user = await registerDB(credentials);
    return user;
  } catch (e) {
    const { status, message } = e.toJSON();
    return thunkAPI.rejectWithValue({ status, message });
  }
});

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const {
      uid,
      displayName,
      email,
      photoURL,
      stsTokenManager: { accessToken },
    } = await loginDB(credentials);
    return { user: { uid, displayName, email, photoURL }, token: accessToken };
  } catch (e) {
    const { status, message } = e.toJSON();
    return thunkAPI.rejectWithValue({ status, message });
  }
});

const logOutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logOut();
  } catch (e) {
    const { status, message } = e.toJSON();
    return thunkAPI.rejectWithValue({ status, message });
  }
});

const updateUserData = createAsyncThunk('auth/updateUserData', async (updateData, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const data = await updateUserProfile(updateData);
    return data;
  }, thunkAPI);
});

const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  console.log('pT ', persistedToken);

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue({ status: 401, message: 'Please login or register!' });
  }

  return await handleErrorAsyncOperation(async () => {
    return await authWithToken(persistedToken);
  }, thunkAPI);
});

export { register, logIn, logOutUser, updateUserData, refreshUser };
