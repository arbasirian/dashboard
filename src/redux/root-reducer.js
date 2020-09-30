import {combineReducers} from 'redux';
import searchReducer from './dashboard/dashboard.reducer';


const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer;