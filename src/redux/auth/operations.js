import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerDB, loginDB, logOut, updateUserProfile } from '../../firebase/auth';

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
    const { uid, displayName, email, photoURL } = await loginDB(credentials);
    return { uid, displayName, email, photoURL };
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

const updateUser = createAsyncThunk('auth/refresh', async (updateData, thunkAPI) => {
  try {
    const res = await updateUserProfile(updateData);
  } catch (e) {
    const { status, message } = e.toJSON();
    return thunkAPI.rejectWithValue({ status, message });
  }
});

export { register, logIn, logOutUser, updateUser };
