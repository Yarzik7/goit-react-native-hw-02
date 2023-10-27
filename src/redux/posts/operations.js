import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  writeDataToFirestore,
  getDataFromFirestore,
  deletePostFromFirestore,
  onChangeLike,
} from '../../firebase/firestore';
import { handleErrorAsyncOperation } from '../../helpers/handleErrorAsyncOperation';

const getPosts = createAsyncThunk('posts/get', async (author, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const posts = await getDataFromFirestore({ route: 'posts' });

    return posts.map(post => ({
      ...post,
      reviewers: post.reviewers?.includes(author) || false,
      likers: post.likers?.includes(author) || false,
    }));
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

const changeLike = createAsyncThunk('posts/changeLike', async (postId, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    return await onChangeLike(postId);
  }, thunkAPI);
});

export { createPost, getPosts, deletePost, changeLike };
