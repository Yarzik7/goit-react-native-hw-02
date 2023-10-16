import { createSelector } from '@reduxjs/toolkit';

const selectComments = state => state.comments.items;
const selectIsCommentsLoading = state => state.comments.isCommentsLoading;
const selectIsCreatingComment = state => state.comments.isCreatingComment;

const selectCommentsOperations = createSelector(
  [selectIsCommentsLoading, selectIsCreatingComment],
  (isCommentsLoading, isCreatingComment) => ({ isCommentsLoading, isCreatingComment })
);

export { selectComments, selectIsCommentsLoading, selectIsCreatingComment, selectCommentsOperations };
