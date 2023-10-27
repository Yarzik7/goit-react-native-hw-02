export const handleErrorAsyncOperation = async (asyncOperation, thunkAPI) => {
  try {
    return await asyncOperation();
  } catch (e) {
    const error = { status: null, message: '' };

    error.status = e.status;
    error.message = e.message;

    return thunkAPI.rejectWithValue(error);
  }
};
