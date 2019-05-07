import { connect } from "react-redux";
import UserListPage from "../../../src/components/userList";

const mapStateToProps = state => {
  return {
    userListTab: state.userList.userListTab,
    loading: state.userList.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserList: params => {
      dispatch({
        type: "FETCH_USER_LIST",
        payload: params
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListPage);
