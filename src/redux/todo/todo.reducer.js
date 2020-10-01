
import TodoActionTypes from './todo.types';

const INITIAL_STATE = {
    list: [],
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TodoActionTypes.ADD_NEW_TODO:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case TodoActionTypes.UPDATE_CUSTOM_TODO:
            return {
                ...state,
                list: state.list.map( (item) => item.id === action.payload.id ?  action.payload : item)
            };
        case TodoActionTypes.DELETE_CUSTOM_TODO:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload)
            };
        default: 
            return state;
    }
}

export default todoReducer;