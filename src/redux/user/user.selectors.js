import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectTodoList = createSelector(
    [selectUser],
    user => user.list
);
