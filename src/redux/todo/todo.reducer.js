
import TodoActionTypes from './todo.types';

const INITIAL_STATE = {
    list: [],
    error: null,
    isLoading: false,
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TodoActionTypes.FETCH_RESULT:
            return {
                ...state,
                isLoading: true
            };
        case TodoActionTypes.FETCH_RESULT_SUCCESS:
            return {
                ...state,
                gifList: action.payload,
                isLoading: false
            };
        case TodoActionTypes.FETCH_RESULT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default: 
            return state;
    }
}

export default todoReducer;