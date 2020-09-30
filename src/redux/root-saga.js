import { all, call } from "redux-saga/effects";
import { startFetchGifs } from "./dashboard/dashboard.sagas";


export default function* rootSaga() {
    yield all([
        call(startFetchGifs),

    ]);

}