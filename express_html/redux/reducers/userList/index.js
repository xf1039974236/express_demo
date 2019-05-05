/* eslint-disable no-fallthrough */
import { GET_USER_LIST } from "../../../constants/actionTypes";
export const initialState = {
  userListTab: []
};
const userList = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_LIST:
      return Object.assign({}, state, {
        userListTab: action.data
      });
    default:
      return state;
  }
};
export default userList;
