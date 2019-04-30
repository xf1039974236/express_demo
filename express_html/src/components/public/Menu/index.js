import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const { Sider } = Layout;

class BaseMenu extends Component {
  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo">
          <p style={{ color: "#fff" }}>logo</p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ overflow: "auto", height: "100vh" }}
        >
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
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
