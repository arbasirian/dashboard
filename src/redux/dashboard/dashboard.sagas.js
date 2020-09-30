
import {  put, takeLatest } from 'redux-saga/effects';
import DashboardActionTypes from './dashboard.types';
import { fetchGifsSuccess, fetchGifsFailure } from './dashboard.actions';
import { fetchGifList } from 'services/giphy-api';

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