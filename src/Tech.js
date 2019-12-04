import React, { Component } from 'react';
// import { Row, Col, Typography} from 'antd';
import Techimg from './SVG/tech.svg'


class Tech extends Component {
  render() {
    return (
      <div>
        <img src={Techimg} alt="Tech" className="img-icon"/>
      </div>
    );
  }
}

export default Tech;