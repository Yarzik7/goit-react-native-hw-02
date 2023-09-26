import { createAsyncThunk } from '@reduxjs/toolkit';
import { writeDataToFirestore } from '../../firebase/firestore';

const createPost = createAsyncThunk('posts/create', async (postInfo, thunkAPI) => {
  try {
    const post = await writeDataToFirestore('posts', postInfo);
    return post;
  } catch (e) {
    const { status, message } = e.toJSON();
    return thunkAPI.rejectWithValue({ status, message });
  }
});

export { createPost };
