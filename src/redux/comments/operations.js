import { createAsyncThunk } from '@reduxjs/toolkit';
import { writeDataToFirestore, onIncrementCommentCount } from '../../firebase/firestore';
const createComment = createAsyncThunk('comments/create', async (commentInfo, thunkAPI) => {
  try {
    const comment = await writeDataToFirestore('comments', commentInfo);
    await onIncrementCommentCount('SAfmAWghLmUMPhRO7rBi');
    return comment;
  } catch (e) {
    const { status, message } = e.toJSON();
    return thunkAPI.rejectWithValue({ status, message });
  }
});

export { createComment };
