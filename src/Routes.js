import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Tech from './Tech'
import User from './User'
import Home from './Home'



class Routes extends Component {

 
  render() {
    return (
      <main>

        <Switch>
      <Route exact path="/" ><Home/></Route>
        <Route path="/tech"  ><Tech/></Route>
        <Route path="/user"><User/></Route>
        </Switch>

      </main>
   
      
    );
  }
}

export default Routes;