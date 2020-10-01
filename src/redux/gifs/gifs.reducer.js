
import GifsActionTypes from './gifs.types';

const INITIAL_STATE = {
    list: [],
    pagination: {
        total_count: 0, 
        count: 0, 
        offset: 0
    },
    query: '',
    error: null,
    isLoading: false,
}

const gifsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GifsActionTypes.FETCH_GIFS:
            return {
                ...state,
                isLoading: true
            };
        case GifsActionTypes.FETCH_GIFS_SUCCESS:
            return {
                ...state,
                list: action.payload.data,
                pagination: action.payload.pagination,
                isLoading: false
            };
        case GifsActionTypes.FETCH_GIFS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case GifsActionTypes.ADD_SEARCH_QUERY:
            return {
                ...state,
                query: action.payload,
            };
        default: 
            return state;
    }
}

export default gifsReducer;