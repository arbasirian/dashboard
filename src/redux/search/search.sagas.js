
import {  put, takeLatest } from 'redux-saga/effects';
import SearchActionTypes from './search.types';
import { fetchSearchResultFailure, fetchSearchResultSuccess } from './search.actions';
import { fetchSearchResults } from 'services/search-api';

export function* fetchResultsAsync({ payload }) {
    try {
        const { query, page, searchId } = payload;
        const searchResults = yield fetchSearchResults(query, page, searchId);
        yield put(fetchSearchResultSuccess(searchResults));
    } catch(error) {
        yield put(fetchSearchResultFailure(error.message));

    }

}

export function* startFetchResults() {
    yield takeLatest(
        SearchActionTypes.FETCH_RESULT,
        fetchResultsAsync
    )
}