import React, { Component } from "react";
import { Layout , LocaleProvider } from "antd";
import { withRouter } from "next/router";
import Head from "next/head";
import PropTypes from "prop-types";
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import "./index.scss";
const { Content } = Layout;
import globalTitle from "../../../constants/global/header";

import BaseMenu from "../Menu";
import BaseHeader from "../Header";
import BaseFooter from "../Footer";

const hasSider = true;

class BodyLayout extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { router } = this.props;
    console.log(router.pathname.slice(1) , "----dfdfd----" );
    let pathkeys =
      router.pathname.slice(1) === ""
        ? "index"
        : router.pathname.slice(1).toLowerCase();
    const title = globalTitle[pathkeys.toUpperCase()] || "unknow path";

    return (
      <LocaleProvider locale={zh_CN}>
      <Layout hasSider={hasSider}>
        <Head>
          <title>{title}</title>
        </Head>
        <BaseMenu />
        <Layout>
          <BaseHeader />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
              overflowY: "auto"
            }}
          >
            {this.props.children}
          </Content>
          <BaseFooter />
        </Layout>
      </Layout>
      </LocaleProvider>
    );
  }
}
BodyLayout.propTypes = {
  children: PropTypes.object
};

export default withRouter(BodyLayout);
