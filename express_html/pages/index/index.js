import React, { Component } from "react";
import { withRouter } from "next/router";
import BodyLayout from "../../src/components/public/BodyLayout";
import UserListPage from "../../redux/containers/UserList";

class App extends Component {
  render() {
    return (
      <BodyLayout>
        <UserListPage />
      </BodyLayout>
    );
  }
}
export default withRouter(App);
