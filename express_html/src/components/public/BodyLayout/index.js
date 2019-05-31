import React, { Component } from "react";
import { Layout } from "antd";
import { withRouter } from "next/router";
import Head from "next/head";
import PropTypes from "prop-types";

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
    let pathkeys =
      router.pathname.slice(1) === ""
        ? "index"
        : router.pathname.slice(1).toLowerCase();
    const title = globalTitle[pathkeys.toUpperCase()] || "unknow path";

    return (
      <Layout hasSider={hasSider}>
        <Head>
          <title>{title}</title>
          <link
            rel="shortcut icon"
            href="/static/favicon.png"
            type="image/png"
          />
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
    );
  }
}
BodyLayout.propTypes = {
  children: PropTypes.object
};

export default withRouter(BodyLayout);
