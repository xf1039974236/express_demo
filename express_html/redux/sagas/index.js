import { all } from "redux-saga/effects";
import testSaga from "./test";
import getUserListProps from "./userList";

export default function* rootSagas() {
  yield all([...testSaga, ...getUserListProps]);
}
