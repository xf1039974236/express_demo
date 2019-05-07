import {
  delay,
  call,
  put,
  takeLatest,
  fork,
  take,
  select
} from "redux-saga/effects";

import { GET_USER_LIST } from "../../constants/actionTypes/index";
import { getUserList } from "../../services/api/index";

function* getUserListProps() {
  while (true) {
    const action = yield take("FETCH_USER_LIST");
    try {
      yield put({ type: "UserlistLoading", loading: true });
      let res = yield call(getUserList, action.payload);
      yield put({
        type: GET_USER_LIST,
        data: res,
        loading: false
      });
    } catch (err) {
      console.log(err, "报错");
    }
  }
  //   while (true) {
  //     console.log(11111);
  //     const action = yield take("*");
  //     const state = yield select();
  //     console.log("action1111", action);
  //     console.log("state after2222", state);
  //   }
  //   for (let i = 0; i < 3; i++) {
  //     const action = yield take("*");
  //     console.log("nnnn1231213", action);
  //   }
  //   yield put({
  //     type: GET_USER_LIST,
  //     data: res
  //   });
}
// function* getUserListsaga() {
//   yield takeLatest("FETCH_USER_LIST", getUserListProps);
// }

export default [fork(getUserListProps)];
