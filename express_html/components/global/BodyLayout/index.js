
import React , { Component } from "react";
import { Layout} from 'antd';
import {withRouter } from "next/router";

import "./index.scss"
const { Content } = Layout;

import BaseMenu from "../Menu";
import BaseHeader from "../Header";
import BaseFooter from "../Footer";

const hasSider = true;

class BodyLayout extends Component {

  render() {
    return (
      <Layout hasSider={hasSider}>
        <BaseMenu></BaseMenu>

        <Layout>
          <BaseHeader></BaseHeader>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 , overflowY:'auto'
          }}
          >
            {this.props.children}
          </Content>
          <BaseFooter></BaseFooter>
        </Layout>
        
      </Layout>
    );
  }
}

export default withRouter(BodyLayout);