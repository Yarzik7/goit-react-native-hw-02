import { createSlice } from '@reduxjs/toolkit';
import { createComment, getPostCommentsOperation } from './operations';
import * as commentsReducers from '../../helpers/reduxActionHandlers/commentsActionHandlers';

const initialState = {
  items: [],
  isCommentsLoading: false,
  isCreatingComment: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsClear: commentsReducers.handleClearCommentsAction,
  },
  extraReducers: builder =>
    builder
      .addCase(createComment.pending, commentsReducers.handleCreateCommentPending)
      .addCase(createComment.fulfilled, commentsReducers.handleCreateCommentFulfilled)
      .addCase(createComment.rejected, commentsReducers.handleCreateCommentRejected)
      .addCase(getPostCommentsOperation.pending, commentsReducers.handleCommentsActionPending)
      .addCase(getPostCommentsOperation.fulfilled, commentsReducers.handleGetCommentsFulfilled)
      .addCase(getPostCommentsOperation.rejected, commentsReducers.handleGetCommentsRejected),
});

export const { commentsClear } = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;
