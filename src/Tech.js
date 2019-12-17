import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firestore from "./firestore";
import {
  List,
  Card,
  Layout,
  Icon
} from 'antd';
const {Content, Header} = Layout;
class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      tickets:[]
      
    };



  }

  componentDidMount(){
    firestore.collection("ticket").onSnapshot(snapshot => {
      let tickets = [];
      snapshot.forEach(doc => {
        const ticket = doc.data();
        ticket.id = doc.id;
        console.log(ticket)
        if (!ticket.completed) tickets.push(ticket);

        
      });
      tickets.sort(function(a, b) {
        return (
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      });
      // Anytime the state of our database changes, we update state
      this.setState({ tickets });
    });
  }

  render() {
    return (
      <div>
      <Layout >
      <Header>
          <Link to="/">
          <Icon type="left" style={{color : "white", fontSize: '22px', marginTop: '22px'}} />
          </Link>
        </Header>
        <Content> 
        <Card>
          <div>
        </div>
            <div>
              
     <List
        grid={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }}
        locale={{ emptyText: "there is no ticket created yet" }}
        dataSource={this.state.tickets}
        renderItem={(ticket)=>(
          
          <List.Item
            >
              <Card
              style={{ marginRight : '10px', marginLeft: '10px'}}
              title={<span style={{ fontWeight:"bold", fontSize: 20, marginRight : '10px', marginLeft: '10px'}}>
              {ticket.issue}</span>}
              // extra={<Icon style={{ fontSize: 18}} type="close" onClick={() => this.showModal(company.id, companyoffices.Oid)}/>}
              >
              <span style={{fontWeight: "bold"}}>
              Requested by : {ticket.name}</span><br/>
              <span style={{fontWeight: "bold"}}>
              Requested at : <br/> </span> {ticket.date}<br/>
              </Card>
          </List.Item>
        )}
            />
        </div>
        </Card>
        </Content>
        </Layout>
      </div>
    );
  }
}

export default Tech;