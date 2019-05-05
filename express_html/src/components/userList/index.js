/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { withRouter } from "next/router";

class UserListPage extends Component {
  state = {
    listArr: []
  };
  componentDidMount() {
    this.props.getUserList();
  }

  render() {
    console.log(this.props.userListTab, "index");
    return <div>fuyarnan</div>;
  }
}
export default withRouter(UserListPage);
