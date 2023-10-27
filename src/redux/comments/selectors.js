import { createSelector } from '@reduxjs/toolkit';
import { postEntitySortByCreateTime } from '../../helpers/sorting/postEntitySortByCreateTime';

const selectComments = state => state.comments.items;
const selectIsCommentsLoading = state => state.comments.isCommentsLoading;
const selectIsCreatingComment = state => state.comments.isCreatingComment;

const selectCommentsOperations = createSelector(
  [selectIsCommentsLoading, selectIsCreatingComment],
  (isCommentsLoading, isCreatingComment) => ({ isCommentsLoading, isCreatingComment })
);

const selectSortedByCreatedTimeComments = createSelector([selectComments], comments => {
  return postEntitySortByCreateTime(comments);
});

export {
  selectComments,
  selectIsCommentsLoading,
  selectIsCreatingComment,
  selectCommentsOperations,
  selectSortedByCreatedTimeComments,
};
