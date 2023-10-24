import {
  handleCreatePostFulfilled,
  handleCreatePostRejected,
  handleCreatePostPending,
} from './createPostActionHandlers';
import {
  handleGetPostsFulfilled,
  handleGetPostsRejected,
  handleGetPostsPending,
} from './getPostsActionHandlers';
import {
  handleDeletePostPending,
  handleDeletePostFulfilled,
  handleDeletePostRejected,
} from './deletePostActionHandlers';
// import { handleLogoutInTasksFulfilled } from './logoutActionHandlersInTasks/handleLogoutInTasksFulfilled';
import { handlePostsActionPending } from './handlePostsActionPending';

export {
  handleCreatePostFulfilled,
  handleCreatePostRejected,
  handleGetPostsFulfilled,
  handleGetPostsRejected,
  handleCreatePostPending,
  handleGetPostsPending,
  // handleLogoutInTasksFulfilled,
  handlePostsActionPending,
  handleDeletePostPending,
  handleDeletePostFulfilled,
  handleDeletePostRejected,
};
