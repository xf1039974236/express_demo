
import React , { Component } from "react";
import { Layout} from 'antd';
import {withRouter} from "next/router"

const { Footer } = Layout;

class BaseFooter extends Component {

  render() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
        </Footer>
    )
  }

}

export default withRouter(BaseFooter);