import { createSlice } from '@reduxjs/toolkit';
import { createPost, getPosts } from './operations';
import { handleRejected } from '../../helpers/extraReducerHandlers';

const initialState = {
  items: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: build =>
    build
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.items = payload;
      }),
});

export const postsReducer = postsSlice.reducer;
