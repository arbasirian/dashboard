import {combineReducers} from 'redux';
import gifsReducer from './gifs/gifs.reducer';
import todoReducer from './todo/todo.reducer';
import userReducer from './user/user.reducer';


const rootReducer = combineReducers({
    gifs: gifsReducer,
    user: userReducer,
    todo: todoReducer
});

export default rootReducer;