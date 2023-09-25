import { createAsyncThunk } from '@reduxjs/toolkit';

const createPost = createAsyncThunk('posts/create', async (postInfo, thunkAPI) => {});

export { createPost };
