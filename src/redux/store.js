import {createStore, applyMiddleware} from 'redux';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
import rootSaga from './root-saga';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
// middleware.push(logger)

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga)

export default store;