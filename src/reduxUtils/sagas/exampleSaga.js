import { put, takeLatest, call } from "redux-saga/effects";
import { exampleServiceCall } from "./../../services/ExampleService";

function* fetchNews(payload = null) {
  try {
    const response = yield call(exampleServiceCall, payload);
    console.log("RESPONSE IS FINALLY HERE ");
    debugger;
    switch (response.status) {
      case 200:
        yield put({
          type: "EXAMPLE_ACTION_SUCCESS",
          status: response.status,
          data: response.data.data
        });
        break;
      case 400:
        yield put({
          type: "EXAMPLE_ACTION_FAILED",
          status: response.data.status,
          errors: response.data.errors
        });
        break;
      case 401:
        yield put({
          type: "TOKEN_EXPIRE",
          status: response.data.status,
          errors: response.data.errors
        });
        break;
      default:
        yield put({ type: "SERVER_FAILED", serverFailed: true });
        break;
    }
  } catch (error) {
    yield put({ type: "SERVER_FAILED", error });
  }
}

export function* actionWatcherGetNews() {
  yield takeLatest("EXAMPLE_ACTION", fetchNews);
}


