/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { withRouter } from "next/router";
import { Table , Modal , Button , Form ,Input ,message , Card} from "antd";

import './index.scss';

const FormItem = Form.Item;
const columns = [
  {
    title: "用户名",
    dataIndex: "username",
    render: username => username,
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
const CreateForm = Form.create()(props => {
  const { createFormVisible, form, handleAdd, handleCreateVisible } = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };
  return (
    <Modal
      destroyOnClose
      title="新增用户"
      visible={createFormVisible}
      onOk={okHandle}
      onCancel={() => handleCreateVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="用户名">
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: '用户名最少两字符！', min: 2}],
        })(<Input placeholder="请输入" />)}
      </FormItem>
    </Modal>
  );
});

class UserListPage extends Component {
  state = {
    pagination: {
      current: 1,
      pageSize: 5
    },
    createFormVisible: false

  };
  //新增按钮
  handleCreateVisible = flag =>{
    this.setState({
      createFormVisible: !!flag
    })
  }
  handleAdd = fields => {
    let params= Object.assign(fields,{picture:'baidu.com'})
    this.props.saveUserList(params);
    const pagination = {...this.state.pagination};
    pagination.current =1;
    this.setState({
      pagination
    });
    const pageParams = {
      page:1,
      pageSize:this.state.pagination.pageSize
    }
    this.props.getUserList(pageParams);

    message.success('添加成功');
    this.handleCreateVisible();
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
    const {createFormVisible} = this.state;
    const createFMethods ={
      handleAdd:this.handleAdd,
      handleCreateVisible: this.handleCreateVisible,
    }
    return (
      <div>
        <div className ='searchTopBox'>
          <Button type="primary" icon="plus" onClick={() => this.handleCreateVisible(true)}>
            新建
          </Button>
        </div>
        <Table
          columns={columns}
          rowKey={record => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />

      <CreateForm {...createFMethods} createFormVisible={createFormVisible} />
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
