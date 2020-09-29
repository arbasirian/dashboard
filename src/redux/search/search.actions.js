import SearchActionTypes from './search.types';

export const fetchSearchResult = filters => ({
    type: SearchActionTypes.FETCH_RESULT,
    payload: filters
});

export const fetchSearchResultSuccess = results => ({
    type: SearchActionTypes.FETCH_RESULT_SUCCESS,
    payload: results
});

export const fetchSearchResultFailure = errorMessage => ({
    type: SearchActionTypes.FETCH_RESULT_FAILURE,
    payload: errorMessage
});

export const addSearchQueryItem = item => ({
    type: SearchActionTypes.ADD_SEARCH_QUERY,
    payload: item
});

export const clearSearchHistory = () => ({
    type: SearchActionTypes.CLEAR_SEARCH_HISTORY,
});

export const addSearchId = id => ({
    type: SearchActionTypes.ADD_SEARCH_ID,
    payload: id
});

export const toggleInlineSearch = status => ({
    type: SearchActionTypes.TOGGLE_INLINE_SEARCH,
    payload: status
});