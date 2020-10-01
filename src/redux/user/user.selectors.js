import { createSelector } from 'reselect';

const selectUserState = state => state.user;

export const selectUserList = createSelector(
    [selectUserState],
    user => user.list
);

export const selectUser = username =>
   createSelector(
      [selectUserList],
      users => users.find(user => user.username === username)
   );
