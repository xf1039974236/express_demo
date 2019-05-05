import { all } from "redux-saga/effects";
import testSaga from "./test";
import getUserListsaga from "./userList";

export default function* rootSagas() {
  yield all([...testSaga, ...getUserListsaga]);
}
