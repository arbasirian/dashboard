import UserActionTypes from "./user.types";

export const addNewUser = user => ({
    type: UserActionTypes.ADD_NEW_USER,
    payload: user
});

export const updateUser = user => ({
    type: UserActionTypes.UPDATE_CUSTOM_USER,
    payload: user
});

export const deleteUser = username => ({
    type: UserActionTypes.DELETE_CUSTOM_USER,
    payload: username
});

