import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  writeDataToFirestore,
  getDataFromFirestore,
  deletePostFromFirestore,
} from '../../firebase/firestore';
import { handleErrorAsyncOperation } from '../../helpers/handleErrorAsyncOperation';

const getPosts = createAsyncThunk('posts/get', async (author, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const posts = await getDataFromFirestore({ route: 'posts', field: 'author', value: author });
    return posts;
  }, thunkAPI);
});

const createPost = createAsyncThunk('posts/create', async (postInfo, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const post = await writeDataToFirestore('posts', postInfo);
    return post;
  }, thunkAPI);
});

const deletePost = createAsyncThunk('posts/delete', async ({ postId, img }, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    await deletePostFromFirestore(postId, img);
  }, thunkAPI);
});

export { createPost, getPosts, deletePost };
