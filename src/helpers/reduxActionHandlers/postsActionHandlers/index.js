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
};
