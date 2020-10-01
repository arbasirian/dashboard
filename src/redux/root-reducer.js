import {combineReducers} from 'redux';
import gifsReducer from './gifs/gifs.reducer';
import userReducer from './user/user.reducer';


const rootReducer = combineReducers({
    gifs: gifsReducer,
    user: userReducer
});

export default rootReducer;