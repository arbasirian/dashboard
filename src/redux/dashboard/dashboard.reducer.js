
import SearchActionTypes from './dashboard.types';

const INITIAL_STATE = {
    error: null,
    isLoading: false,
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SearchActionTypes.FETCH_RESULT:
            return {
                ...state,
                isLoading: true
            };
        case SearchActionTypes.FETCH_RESULT_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case SearchActionTypes.FETCH_RESULT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default: 
            return state;
    }
}

export default searchReducer;