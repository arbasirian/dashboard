import TodoActionTypes from "./todo.types";

export const addNewTodo = item => ({
    type: TodoActionTypes.ADD_NEW_TODO,
    payload: item
});

export const updateTodo = item => ({
    type: TodoActionTypes.UPDATE_CUSTOM_TODO,
    payload: item
});

export const deleteTodo = itemId => ({
    type: TodoActionTypes.DELETE_CUSTOM_TODO,
    payload: itemId
});

