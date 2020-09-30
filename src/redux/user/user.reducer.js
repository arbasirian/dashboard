
import UserActionTypes from './user.types';

const INITIAL_STATE = {
    list: [],
    error: null,
    isLoading: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.FETCH_RESULT:
            return {
                ...state,
                isLoading: true
            };
        default: 
            return state;
    }
}

export default userReducer;