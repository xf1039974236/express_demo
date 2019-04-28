
import React , { Component } from "react";
import { Layout, Icon , Row , Col } from 'antd';
import { withRouter } from "next/router";
import globalTitle from "../../../constants/public/header"

const { Header} = Layout;

class BaseHeader extends Component {
    state = {
        collapsed:false
    }
  render() {
    const {router} = this.props;
    console.log(router)
    let pathkeys = router.pathname.slice(1,) === "" ? "index": router.pathname.slice(1,).toLowerCase() ;
    const title = globalTitle[pathkeys.toUpperCase()] || "unknow path";
    
    return (
    <Header style={{ background: '#fff', paddingLeft:'24px' }}>
        <Row>
          <Col span={2}>
            <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
            style={{fontSize:'18px'}}
          />
          </Col>
          <Col span={16}>
            <h2 style={{textAlign:"center"}}>{title}</h2>
          </Col>
          <Col span={6}>col-12</Col>
        </Row>
    </Header>
    );
  }
}

export default withRouter(BaseHeader);