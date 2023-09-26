import { createAsyncThunk } from '@reduxjs/toolkit';
import { FieldValue } from 'firebase/firestore';
import { writeDataToFirestore, updateDataInFirestore, onIncrementCommentCount } from '../../firebase/firestore';
const createComment = createAsyncThunk('comments/create', async (commentInfo, thunkAPI) => {
  try {
    const comment = await writeDataToFirestore('comments', commentInfo);
    // await updateDataInFirestore('posts', 'SAfmAWghLmUMPhRO7rBi', { commentsCount: FieldValue.increment(1) });
    await onIncrementCommentCount('SAfmAWghLmUMPhRO7rBi');
    return comment;
  } catch (e) {
    const { status, message } = e.toJSON();
    return thunkAPI.rejectWithValue({ status, message });
  }
});

export { createComment };
