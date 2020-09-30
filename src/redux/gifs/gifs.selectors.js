import { createSelector } from 'reselect';

const selectGifs = state => state.gifs;

export const selectGifList = createSelector(
    [selectGifs],
    gifs => gifs.list
);
export const selectLoading = createSelector(
    [selectGifs],
    gifs => gifs.isLoading
);