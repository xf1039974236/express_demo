import { delay, put, takeEvery, fork } from "redux-saga/effects";

import {
  TOGGLE_COLLAPSED,
  SAGA_TEST_PAGE
} from "../../constants/actionTypes/header";

function* getAsyncReduxSagaProp() {
  yield delay(100);
  yield put({
    type: SAGA_TEST_PAGE,
    data: "dfdf"
  });

  //   let action = yield take("SAGA_TEST_PAGE");
  //   console.log("fuyanran", action);
}

function* rootSaga() {
  yield takeEvery(TOGGLE_COLLAPSED, getAsyncReduxSagaProp);
}

export default [fork(rootSaga)];
