/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { withRouter } from "next/router";
import {
  Table,
  Modal,
  Button,
  Form,
  Input,
  message,
  Icon,
  Row,
  Col,
  Select,
  InputNumber,
  DatePicker
} from "antd";
import moment from "moment";

import "./index.scss";

const FormItem = Form.Item;
const { Option } = Select;
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
    dataIndex: "createdAt",
    render: val => {
      return <span>{moment(val).format("YYYY-MM-DD HH:mm:ss")}</span>;
    }
  },
  {
    title: "修改日期",
    dataIndex: "updatedAt",
    render: val => {
      return <span>{moment(val).format("YYYY-MM-DD HH:mm:ss")}</span>;
    }
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
        {form.getFieldDecorator("username", {
          rules: [{ required: true, message: "用户名最少两字符！", min: 2 }]
        })(<Input placeholder="请输入" />)}
      </FormItem>
    </Modal>
  );
});

@Form.create()
class UserListPage extends Component {
  state = {
    pagination: {
      current: 1,
      pageSize: 5
    },
    createFormVisible: false,
    expandForm: false
  };
  //新增按钮
  handleCreateVisible = flag => {
    this.setState({
      createFormVisible: !!flag
    });
  };
  //弹框的添加按钮
  handleAdd = fields => {
    let params = Object.assign(fields, { picture: "baidu.com" });
    this.props.saveUserList(params);
    const pagination = { ...this.state.pagination };
    pagination.current = 1;
    this.setState({
      pagination
    });
    const pageParams = {
      page: 1,
      pageSize: this.state.pagination.pageSize
    };
    this.props.getUserList(pageParams);

    message.success("添加成功");
    this.handleCreateVisible();
  };
  //点击分页
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
  //搜索方法
  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {}
    });
  };
  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm
    });
  };
  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf()
      };

      this.setState({
        formValues: values
      });

      // dispatch({
      //   type: "rule/fetch",
      //   payload: values
      // });
    });
  };

  componentDidMount() {
    const params = {
      page: this.state.pagination.current,
      pageSize: this.state.pagination.pageSize
    };
    this.props.getUserList(params);
  }

  //展开和收起
  renderSimpleForm() {
    const {
      form: { getFieldDecorator }
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="用户名">
              {getFieldDecorator("username")(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="邮箱">
              {getFieldDecorator("email")(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className="submitButtons">
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderAdvancedForm() {
    const {
      form: { getFieldDecorator }
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="用户名">
              {getFieldDecorator("username")(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="邮箱">
              {getFieldDecorator("email")(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="创建日期">
              {getFieldDecorator("createdAt")(
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="请输入创建日期"
                />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="修改日期">
              {getFieldDecorator("updatedAt")(
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="请输入修改日期"
                />
              )}
            </FormItem>
          </Col>
        </Row>
        <div style={{ overflow: "hidden" }}>
          <div style={{ marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
              重置
            </Button>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
              收起 <Icon type="up" />
            </a>
          </div>
        </div>
      </Form>
    );
  }

  renderForm = () => {
    const { expandForm } = this.state;
    return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  };

  render() {
    let pagination = this.state.pagination;
    pagination.total = this.props.userListTab.total;

    const data = this.props.userListTab.users,
      loading = this.props.loading;
    const { createFormVisible } = this.state;
    const createFMethods = {
      handleAdd: this.handleAdd,
      handleCreateVisible: this.handleCreateVisible
    };
    return (
      <div>
        <div className="searchTopBox">
          <div className="tableListForm">{this.renderForm()}</div>
          <Button
            type="primary"
            icon="plus"
            onClick={() => this.handleCreateVisible(true)}
          >
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
