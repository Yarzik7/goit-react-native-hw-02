import { createSlice } from '@reduxjs/toolkit';
import { createPost, getPosts } from './operations';
import * as postsReducers from '../../helpers/reduxActionHandlers/postsActionHandlers';

const initialState = {
  items: [],
  isPostsLoading: false,
  isCreatingPost: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(createPost.pending, postsReducers.handleCreatePostPending)
      .addCase(createPost.fulfilled, postsReducers.handleCreatePostFulfilled)
      .addCase(createPost.rejected, postsReducers.handleCreatePostRejected)
      .addCase(getPosts.pending, postsReducers.handlePostsActionPending)
      .addCase(getPosts.fulfilled, postsReducers.handleGetPostsFulfilled)
      .addCase(getPosts.rejected, postsReducers.handleGetPostsRejected),
});

export const postsReducer = postsSlice.reducer;
