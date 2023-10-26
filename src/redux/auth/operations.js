import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerDB, loginDB, logOut, updateUserProfile } from '../../firebase/auth';
import { handleErrorAsyncOperation } from '../../helpers/handleErrorAsyncOperation';

const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { user } = await registerDB(credentials);
    return user;
  }, thunkAPI);
});

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { uid, displayName, email, photoURL } = await loginDB(credentials);
    return { user: { uid, displayName, email, photoURL } };
  }, thunkAPI);
});

const logOutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    await logOut();
  }, thunkAPI);
});

const updateUserData = createAsyncThunk('auth/updateUserData', async (updateData, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const data = await updateUserProfile(updateData);
    return data;
  }, thunkAPI);
});

export { register, logIn, logOutUser, updateUserData };
