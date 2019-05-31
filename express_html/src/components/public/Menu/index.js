import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const { Sider } = Layout;

class BaseMenu extends Component {
  render() {
    const { collapsed } = this.props;
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
          <Menu.Item key="1">
            <Icon type="user" />
            <span>用户列表页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
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
