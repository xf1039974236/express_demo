import { delay, call, put, takeEvery, fork } from "redux-saga/effects";

import { GET_USER_LIST } from "../../constants/actionTypes/index";
import { getUserList } from "../../services/api/index";

function* getUserListProps() {
  try {
    let res = yield call(getUserList);
    yield put({
      type: GET_USER_LIST,
      data: res
    });
    // if (res.meta.code === 200) {
    //   yield put({
    //     type: GET_USER_LIST,
    //     data: res
    //   });
    // } else {
    //   console.log("200错");
    // }
  } catch (err) {
    console.log(err, "报错");
  }

  //   yield put({
  //     type: GET_USER_LIST,
  //     data: res
  //   });
}
function* getUserListsaga() {
  yield takeEvery("FETCH_USER_LIST", getUserListProps);
}

export default [fork(getUserListsaga)];
