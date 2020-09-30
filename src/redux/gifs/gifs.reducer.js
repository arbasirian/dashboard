
import GifsActionTypes from './gifs.types';

const INITIAL_STATE = {
    list: [],
    error: null,
    isLoading: false,
}

const gifsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GifsActionTypes.FETCH_RESULT:
            return {
                ...state,
                isLoading: true
            };
        case GifsActionTypes.FETCH_RESULT_SUCCESS:
            return {
                ...state,
                gifList: action.payload,
                isLoading: false
            };
        case GifsActionTypes.FETCH_RESULT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default: 
            return state;
    }
}

export default gifsReducer;