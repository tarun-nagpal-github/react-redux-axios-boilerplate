import { all } from "redux-saga/effects";
import "regenerator-runtime/runtime";

import { actionWatcherGetNews } from "./exampleSaga";


export default function* rootSaga() {
  yield all([
    actionWatcherGetNews()
  ]);
}
