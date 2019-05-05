import { connect } from "react-redux";
import UserListPage from "../../../src/components/userList";

const mapStateToProps = state => {
  return {
    userListTab: state.userList.userListTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserList: () => {
      dispatch({
        type: "FETCH_USER_LIST"
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListPage);
