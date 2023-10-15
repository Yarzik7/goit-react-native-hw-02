import { createSlice } from '@reduxjs/toolkit';
import { createComment, getPostCommentsOperation } from './operations';
// import { handleRejected } from '../../helpers/extraReducerHandlers';

const initialState = {
  items: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    clearItems: state => {
      state.items = [];
    },
  },
  extraReducers: build =>
    build
      .addCase(createComment.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(getPostCommentsOperation.fulfilled, (state, { payload }) => {
        state.items = payload;
      }),
});

export const commentsReducer = commentsSlice.reducer;
