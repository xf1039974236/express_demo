/* eslint-disable no-fallthrough */
import { SAGA_TEST_PAGE } from "../../constants/actionTypes/header";
export const test = {
  collapsed: false
};
const sagatest = (state = test, action = {}) => {
  switch (action.type) {
    case SAGA_TEST_PAGE:
      console.log(action.data, "aaaaAAA");
    default:
      return state;
  }
};
export default sagatest;
