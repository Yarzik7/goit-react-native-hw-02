import {
  handleGetCommentsFulfilled,
  handleGetCommentsRejected,
  handleGetCommentsPending,
} from './getCommentsActionHandlers';
import {
  handleCreateCommentPending,
  handleCreateCommentFulfilled,
  handleCreateCommentRejected,
} from './createCommentActionHandlers';
import { handleCommentsActionPending } from './handleCommentsActionPending';
import { handleClearCommentsAction } from './clearCommentsActionHandlers/handleClearCommentsAction';

export {
  handleCreateCommentPending,
  handleCreateCommentFulfilled,
  handleCreateCommentRejected,
  handleGetCommentsFulfilled,
  handleGetCommentsRejected,
  handleGetCommentsPending,
  handleCommentsActionPending,
  handleClearCommentsAction,
};
