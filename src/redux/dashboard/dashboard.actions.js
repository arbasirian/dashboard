import DashboardActionTypes from './dashboard.types';

export const fetchGifs = filters => ({
    type: DashboardActionTypes.FETCH_GIFS,
    payload: filters
});

export const fetchGifsSuccess = results => ({
    type: DashboardActionTypes.FETCH_GIFS_SUCCESS,
    payload: results
});

export const fetchGifsFailure = errorMessage => ({
    type: DashboardActionTypes.FETCH_GIFS_FAILURE,
    payload: errorMessage
});
