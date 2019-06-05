import {
  delay,
  call,
  put,
  takeLatest,
  fork,
  take,
  select
} from "redux-saga/effects";

import {
  GET_USER_LIST,
  UserlistLoading,
  TAKE_SAVE_USER
} from "../../constants/actionTypes/index";
import { getUserList , saveUserFun } from "../../services/api/index";


function* getUserListProps() {
  while (true) {
    const action = yield take("FETCH_USER_LIST");
    try {
      yield put({ type: UserlistLoading, loading: true });
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
}

// function* getUserListsaga() {
//   yield takeLatest("FETCH_USER_LIST", getUserListProps);
// }
function *saveUserProps(){
  while (true){
    const action = yield take(TAKE_SAVE_USER);
    try{
      let res = yield call ( saveUserFun , action.payload);
    } catch(err){
    }

  }
}

export default [
  fork(getUserListProps), 
  fork(saveUserProps)
];
