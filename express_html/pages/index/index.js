import React, { Component } from "react";
import { withRouter } from "next/router";
import BodyLayout from "../../components/global/BodyLayout";
class App extends Component {
  render() {
    return (
      <BodyLayout>
        <div>fufuufu</div>
      </BodyLayout>
    );
  }
}
export default withRouter(App);
