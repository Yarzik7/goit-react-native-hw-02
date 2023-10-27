import { createSelector } from '@reduxjs/toolkit';
import { postEntitySortByCreateTime } from '../../helpers/sorting/postEntitySortByCreateTime';

const selectPosts = state => state.posts.items;
const selectIsPostsLoading = state => state.posts.isPostsLoading;
const selectIsCreatingPost = state => state.posts.isCreatingPost;
const selectIsDeletingPost = state => state.posts.isDeletingPost;
const selectCurrentPostId = state => state.posts.currentPostId;
const selectSortedByCreatedTimePosts = createSelector([selectPosts], posts => {
  return postEntitySortByCreateTime(posts);
});

export {
  selectPosts,
  selectIsPostsLoading,
  selectIsCreatingPost,
  selectIsDeletingPost,
  selectCurrentPostId,
  selectSortedByCreatedTimePosts,
};
