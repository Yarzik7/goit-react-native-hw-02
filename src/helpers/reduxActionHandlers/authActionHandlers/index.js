import {
  handleRegisterFulfilled,
  handleRegisterRejected,
  handleRegisterPending,
} from './registerActionHandlers';

import { handleLoginFulfilled, handleLoginRejected } from './loginActionHandlers';

import { handleLogoutFulfilled, handleLogoutRejected, handleLogoutPending } from './logoutActionHandlers';

import {
  handleUpdateUserFulfilled,
  handleUpdateUserRejected,
  handleUpdateUserPending,
} from './updateUserActionHandlers';

import { handleAuthActionPending } from './handleAuthActionPending';

export {
  handleRegisterFulfilled,
  handleRegisterRejected,
  handleRegisterPending,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleLogoutRejected,
  handleLoginRejected,
  handleUpdateUserFulfilled,
  handleUpdateUserRejected,
  handleAuthActionPending,
  handleUpdateUserPending,
  handleLogoutPending,
};
