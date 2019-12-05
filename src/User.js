import React, { Component } from 'react';
// import { Row, Col, Typography} from 'antd';
import Userimg from './SVG/user.svg'
import { Link } from 'react-router-dom';

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Row,
  Col,
  Button,
  Card,
  Layout
} from 'antd';
const {TextArea } = Input
const {Header, Content} = Layout
class UserForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
        },
      },
    };
    
    return (
      <Layout className="layout">
        <Header>
          <Link to="/" Component={Icon}>
          <Icon type="left" style={{color : "white", fontSize: '22px', marginTop: '22px'}} />
          </Link>
        </Header>
      <Row  justify ={"center"}>
        <Content>
      <Card style={{ marginTop: '22px', textAlign: 'center'}} className="card" >
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [

              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input  />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Issue
            </span>
          }
        >
          {getFieldDecorator('Issue', {
            rules: [{ required: true, message: 'Please input your Issue!', whitespace: true }],
          })(<TextArea  />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
      </Card>
      </Content>
      </Row>
      </Layout>
    );
  }
}

const User = Form.create({ name: 'register' })(UserForm);

export default User
