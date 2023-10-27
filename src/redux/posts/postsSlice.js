import { createSlice } from '@reduxjs/toolkit';
import { createPost, getPosts, deletePost, changeLike } from './operations';
import * as postsReducers from '../../helpers/reduxActionHandlers/postsActionHandlers';

const initialState = {
  items: [],
  isPostsLoading: false,
  isCreatingPost: false,
  isDeletingPost: false,
  isChangingLike: false,
  currentPostId: null,
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
      .addCase(getPosts.rejected, postsReducers.handleGetPostsRejected)
      .addCase(deletePost.pending, postsReducers.handleDeletePostPending)
      .addCase(deletePost.fulfilled, postsReducers.handleDeletePostFulfilled)
      .addCase(deletePost.rejected, postsReducers.handleDeletePostRejected)
      .addCase(changeLike.pending, postsReducers.handleChangeLikePending)
      .addCase(changeLike.fulfilled, postsReducers.handleChangeLikeFulfilled)
      .addCase(changeLike.rejected, postsReducers.handleChangeLikeRejected),
});

export const postsReducer = postsSlice.reducer;
