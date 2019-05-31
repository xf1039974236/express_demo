/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { withRouter } from "next/router";
import { Table } from "antd";

const columns = [
  {
    title: "用户名",
    dataIndex: "name",
    render: name => name,
    width: "20%"
  },
  {
    title: "邮箱",
    dataIndex: "email",
    // filters: [
    //   { text: "Male", value: "male" },
    //   { text: "Female", value: "female" }
    // ],
    width: "20%"
  },
  {
    title: "创建日期",
    sorter: true,
    dataIndex: "createdAt"
  },
  {
    title: "修改日期",
    dataIndex: "updatedAt"
  }
];

class UserListPage extends Component {
  state = {
    pagination: {
      current: 1,
      pageSize: 5
    }
  };
  handleTableChange = pagination => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    const params = {
      page: pagination.current,
      pageSize: this.state.pagination.pageSize
    };
    this.props.getUserList(params);
  };

  componentDidMount() {
    const params = {
      page: this.state.pagination.current,
      pageSize: this.state.pagination.pageSize
    };
    this.props.getUserList(params);
  }

  render() {
    let pagination = this.state.pagination;
    pagination.total = this.props.userListTab.total;

    const data = this.props.userListTab.users,
      loading = this.props.loading;
    return (
      <div>
        <Table
          columns={columns}
          rowKey={record => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}
//假数据
// const dataPage = [];
// for (let i = 0; i < 46; i++) {
//   dataPage.push({
//     key: i,
//     name: `fufufung ${i}`,
//     email: `tiantian ${i}`,
//     createdAt: `1990-01-{i}`,
//     updatedAt: `1993-08-{i}`
//   });
// }
export default withRouter(UserListPage);
