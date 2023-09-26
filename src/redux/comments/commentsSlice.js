import { createSlice } from '@reduxjs/toolkit';
import { createComment } from './operations';
// import { handleRejected } from '../../helpers/extraReducerHandlers';

const initialState = {
  items: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: build =>
    build.addCase(createComment.fulfilled, (state, { payload }) => {
      state.items.push(payload);
    }),
});

export const commentsReducer = commentsSlice.reducer;
