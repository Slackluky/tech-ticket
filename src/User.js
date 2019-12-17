import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firestore from "./firestore";

import {
  Form,
  Input,
  Icon,
  Row,
  Button,
  Card,
  Layout,
  message
} from 'antd';
const {TextArea } = Input
const {Header, Content} = Layout

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      completed : false
    };
  }

  makeId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      var user = {
        ...values,
        ticketId : this.makeId(),
        date : new Date().toISOString(),
        completed : false
      };
      
      firestore.collection("ticket").add(user);
       this.props.form.resetFields();
       message.success('a new ticket is created successfuly');
      }
      
    );
    
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
          <Link to="/">
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
          })(<Input name="name" />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Issue
            </span>
          }
        >
          {getFieldDecorator('issue', {
            rules: [{ required: true, message: 'Please input your Issue!', whitespace: true }],
          })(<TextArea name="issue" />)}
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
