import { all } from "redux-saga/effects";
import rootSaga from "./test";

export default function* rootSagas() {
  yield all([...rootSaga]);
}
