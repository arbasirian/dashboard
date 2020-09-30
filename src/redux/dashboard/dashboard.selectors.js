import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectResults = createSelector(
    [selectSearch],
    search => search.results
);
export const selectHistory = createSelector(
    [selectSearch],
    search => search.histories
);
export const selectSearchId = createSelector(
    [selectSearch],
    search => search.searchId
);
export const selectQuery = createSelector(
    [selectSearch],
    search => search.query
);
export const selectLoading = createSelector(
    [selectSearch],
    search => search.isLoading
);
export const selectInlineSearch = createSelector(
    [selectSearch],
    search => search.inlineSearch
);