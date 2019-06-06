/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Link from "next/link";

const { Sider } = Layout;

class BaseMenu extends Component {
  componentDidMount() {
    const { router } = this.props;
    router.prefetch("/");
    router.prefetch("/user");
  }
  render() {
    const { collapsed, router } = this.props;
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" style={{ textAlign: "center" }}>
          <a href="/">
            <img
              src="/static/favicon.png"
              style={{
                width: "50px",
                display: "inline-block",
                verticalAlign: "middle"
              }}
            />
            <h2
              style={{
                display: collapsed ? "none" : "inline-block",
                verticalAlign: "middle",
                lineHeight: "50px",
                margin: "0 0 0 4px",
                fontSize: "16px",
                fontWeight: "400",
                color: "#fff"
              }}
            >
              微信小程序后台
            </h2>
          </a>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ overflow: "auto", height: "100vh" }}
        >
          <Menu.Item key="index">
            <a onClick={() => setTimeout(() => router.push("/"), 100)}>
              <Icon type="user" />
              <span>用户列表页</span>
            </a>
          </Menu.Item>
          <Menu.Item key="user">
            {/* <Link> */}
            <a onClick={() => setTimeout(() => router.push("/user"), 100)}>
              <Icon type="user" />
              <span>用户列表页</span>
            </a>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

BaseMenu.propTypes = {
  collapsed: PropTypes.bool
};
const mapStateToProps = state => {
  return {
    collapsed: state.pheader.collapsed
  };
};

export default connect(mapStateToProps)(withRouter(BaseMenu));
