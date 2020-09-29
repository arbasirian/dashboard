
import SearchActionTypes from './search.types';

const INITIAL_STATE = {
    results: [],
    histories: [],
    searchId: null,
    query: '',
    error: null,
    isLoading: false,
    inlineSearch: false
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
                results: action.payload,
                searchId: action.payload.length > 0 ? action.payload[0].query._id : '',
                histories: action.payload.length > 0 ? [...state.histories, action.payload[0]] : [...state.histories],
                isLoading: false,
                inlineSearch: false
            };
        case SearchActionTypes.FETCH_RESULT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                inlineSearch: false
            };
        case SearchActionTypes.ADD_SEARCH_QUERY:
            return {
                ...state,
                query: action.payload
            };
        case SearchActionTypes.CLEAR_SEARCH_HISTORY:
            return {
                ...state,
                histories: []
            };
        case SearchActionTypes.ADD_SEARCH_ID:
            return {
                ...state,
                searchId: action.payload
            };
        case SearchActionTypes.TOGGLE_INLINE_SEARCH:
                return {
                    ...state,
                    inlineSearch: action.payload
                };
        default: 
            return state;
    }
}

export default searchReducer;