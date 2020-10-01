import { createSelector } from 'reselect';

const selectGifs = state => state.gifs;

export const selectGifList = createSelector(
    [selectGifs],
    gifs => gifs.list
);

export const selectSearchQuery = createSelector(
    [selectGifs],
    gifs => gifs.query
);

export const selectPagination= createSelector(
    [selectGifs],
    gifs => gifs.pagination
);

export const selectLoading = createSelector(
    [selectGifs],
    gifs => gifs.isLoading
);