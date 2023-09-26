import { createSlice } from '@reduxjs/toolkit';
import { createPost } from './operations';
import { handleRejected } from '../../helpers/extraReducerHandlers';

const initialState = {
  items: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: build =>
    build.addCase(createPost.fulfilled, (state, { payload }) => {
      state.items.push(payload);
    }),
});

export const postsReducer = postsSlice.reducer;
