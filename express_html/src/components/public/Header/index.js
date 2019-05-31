/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Layout, Icon, Row, Col, Menu, Dropdown, Avatar } from "antd";
import { withRouter } from "next/router";
import globalTitle from "../../../constants/global/header";

import { connect } from "react-redux";
const { Header } = Layout;

import { collapsedToggle } from "../../../../redux/actions/public/header";
import "./index.scss";

class BaseHeader extends Component {
  render() {
    const { router } = this.props;
    //console.log(router);
    let pathkeys =
      router.pathname.slice(1) === ""
        ? "index"
        : router.pathname.slice(1).toLowerCase();
    const title = globalTitle[pathkeys.toUpperCase()] || "unknow path";

    const menu = (
      <Menu>
        <Menu.Item>
          <Icon type="logout" />
          <a style={{ display: "inline-block" }}>退出登录</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Header style={{ background: "#fff", padding: "0 24px" }}>
        <Row>
          <Col span={2}>
            <Icon
              className="trigger"
              type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.props.toggle}
              style={{ fontSize: "18px" }}
            />
          </Col>
          <Col span={18}>
            <h2 style={{ textAlign: "center" }}>{title}</h2>
          </Col>
          <Col span={4} style={{ textAlign: "right" }}>
            <Dropdown overlay={menu}>
              <a className="drop-header" href="#">
                <Avatar icon="user" />
                <h2 className="user-name">userName</h2>
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "all----state----console");
  return {
    collapsed: state.pheader.collapsed
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggle: () => {
      dispatch({ type: "TOGGLE_COLLAPSED" });
    }
  };
};
// const mapDispatchToProps = dispatch => ({
//   toggle() {
//     dispatch(collapsedToggle());
//   }
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BaseHeader));
