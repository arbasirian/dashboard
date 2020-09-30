import { all, call } from "redux-saga/effects";
import { startFetchGifs } from "./gifs/gifs.sagas";


export default function* rootSaga() {
    yield all([
        call(startFetchGifs),

    ]);

}