import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tech from './Tech'
import User from './User'
import Home from './Home'



const Routes = () => (
      <main>

        <Switch>
      <Route exact path="/" ><Home/></Route>
        <Route path="/tech"  ><Tech/></Route>
        <Route path="/user"><User/></Route>
        </Switch>

      </main>
   
      
    );


export default Routes;