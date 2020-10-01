import UserActionTypes from './user.types';
import {
    USERS
} from 'helper';

const INITIAL_STATE = {
    list: USERS,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.ADD_NEW_USER:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case UserActionTypes.UPDATE_CUSTOM_USER:
            return {
                ...state,
                list: state.list.map( (user) => user.username === action.payload.username ?  action.payload : user)
            };
        case UserActionTypes.DELETE_CUSTOM_USER:
            return {
                ...state,
                list: state.list.filter((user) => user.username !== action.payload)
            };
        default:
            return state;
    }
}

export default userReducer;