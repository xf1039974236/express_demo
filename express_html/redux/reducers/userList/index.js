/* eslint-disable no-fallthrough */
import { GET_USER_LIST } from "../../../constants/actionTypes";
export const initialState = {
  userListTab: [],
  loading: false
};
const userList = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_LIST:
      return Object.assign({}, state, {
        userListTab: action.data,
        loading: action.loading
      });
    case "UserlistLoading":
      return Object.assign({}, state, {
        loading: action.loading
      });
    default:
      return state;
  }
};
export default userList;
