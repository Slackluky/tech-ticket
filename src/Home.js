import React, { Component } from 'react';
import { Row, Col, Typography} from 'antd';
import { Link } from 'react-router-dom';
import Techimg from './SVG/tech.svg'
import Userimg from './SVG/user.svg'
import './App.css'

const { Title } = Typography;

class Home extends Component {

  constructor(props){
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseHoverB = this.handleMouseHoverB.bind(this);
    this.state = {
      isHovering: false,
      isHoveringB: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  handleMouseHoverB() {
    this.setState(this.toggleHoverStateB);
  }

  toggleHoverStateB(state) {
    return {
      isHoveringB: !state.isHoveringB,
    };
  }

  render() {
    console.log(this.state.isHoveringB)
    return (
      <div className="App">
        
    <Row className="row" >
      <Link to='/tech'>
      <Col xs={24} sm={24} md={24} lg={12} xl={12} 
      className="red"
      style={{backgroundColor: this.state.isHovering?  "#faa0bb":"#fa5183"}}
      onMouseEnter={this.handleMouseHover}
      onMouseLeave={this.handleMouseHover}>
        <img src={Techimg} alt="Tech" className="img-icon"/>
      </Col>
      </Link>
      <div className="que">
      <Title className="Tittle">WHO ARE YOU?</Title>
    </div>
    <Link to='/user'>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}
      className="blue"
      style={{backgroundColor: this.state.isHovering? "#4287f5":"#9ec6fc"}}
      onMouseEnter={this.handleMouseHoverB}
      onMouseLeave={this.handleMouseHoverB}
      >
        <img src={Userimg} alt="User" className="img-icon"/>
      </Col>
      </Link>
    </Row>
      </div>
   
      
    );
  }
}

export default Home;