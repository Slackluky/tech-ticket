import React, { Component } from 'react';
// import { Row, Col, Typography} from 'antd';
import Userimg from './SVG/user.svg'


class User extends Component {
  render() {
    return (
      <div>
        <img src={Userimg} alt="user" className="img-icon"/>
      </div>
    );
  }
}

export default User;