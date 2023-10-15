import { createAsyncThunk } from '@reduxjs/toolkit';
import { writeDataToFirestore, getDataFromFirestore } from '../../firebase/firestore';

const getPosts = createAsyncThunk('posts/get', async (author, thunkAPI) => {
  try {
    const posts = await getDataFromFirestore({ route: 'posts', field: 'author', value: author });
    return posts;
  } catch (e) {
    const { status, message } = e.toJSON();
    return thunkAPI.rejectWithValue({ status, message });
  }
});

const createPost = createAsyncThunk('posts/create', async (postInfo, thunkAPI) => {
  try {
    const post = await writeDataToFirestore('posts', postInfo);
    return post;
  } catch (e) {
    const { status, message } = e.toJSON();
    return thunkAPI.rejectWithValue({ status, message });
  }
});

export { createPost, getPosts };
