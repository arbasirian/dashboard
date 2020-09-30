import TodoActionTypes from './todo.types';

export const fetchGifs = filters => ({
    type: TodoActionTypes.FETCH_GIFS,
    payload: filters
});

export const fetchGifsSuccess = results => ({
    type: TodoActionTypes.FETCH_GIFS_SUCCESS,
    payload: results
});

export const fetchGifsFailure = errorMessage => ({
    type: TodoActionTypes.FETCH_GIFS_FAILURE,
    payload: errorMessage
});
