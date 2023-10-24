export const handleErrorAsyncOperation = async (asyncOperation, thunkAPI) => {
  try {
    return await asyncOperation();
  } catch (e) {
    const error = { status: null, message: '' };

    error.status = e.status;
    error.message = e.message;

    console.log('Operation error: ', error);
    return thunkAPI.rejectWithValue(error);
  }
};
