/* eslint-disable no-fallthrough */
import { TOGGLE_COLLAPSED } from "../../../constants/actionTypes/header";
export const stateheader = {
  collapsed: false
};
const pheader = (state = stateheader, action = {}) => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      const locollapsed = state.collapsed;
      return Object.assign({}, state, {
        collapsed: !locollapsed
      });
    default:
      return state;
  }
};
export default pheader;
