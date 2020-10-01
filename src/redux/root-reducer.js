import {combineReducers} from 'redux';
import gifsReducer from './gifs/gifs.reducer';


const rootReducer = combineReducers({
    gifs: gifsReducer
});

export default rootReducer;