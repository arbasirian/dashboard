
import {  put, takeLatest } from 'redux-saga/effects';
import DashboardActionTypes from './gifs.types';
import { fetchGifList } from 'services/giphy-api';
import { fetchGifsFailure, fetchGifsSuccess } from './gifs.actions';

export function* fetchGifsAsync({ payload }) {
    try {
        const { query } = payload;
        const searchResults = yield fetchGifList(query);
        yield put(fetchGifsSuccess(searchResults));
    } catch(error) {
        yield put(fetchGifsFailure(error.message));

    }

}

export function* startFetchGifs() {
    yield takeLatest(
        DashboardActionTypes.FETCH_GIFS,
        fetchGifsAsync
    )
}