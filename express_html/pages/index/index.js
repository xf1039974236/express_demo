import React, { Component } from "react";
import { withRouter } from "next/router";
import BodyLayout from "../../src/components/public/BodyLayout";
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
