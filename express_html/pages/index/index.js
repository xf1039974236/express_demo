import React, { Component } from "react";
import { withRouter } from "next/router";
import BodyLayout from "../../src/components/public/BodyLayout";
import { connect } from "react-redux";
import axios from "axios";

class App extends Component {
  state = {
    listArr: []
  };

  getListFun = () => {
    axios
      .get("http://localhost:8000/user/userList", {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        this.setState({
          listArr: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getListFun();
  }

  render() {
    console.log(this.state.listArr);
    return (
      <BodyLayout>
        <div>fufuufu</div>
      </BodyLayout>
    );
  }
}
export default connect(state => state)(withRouter(App));
