import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Menu from './Menu';
import Home from './Home';
import Entities from './Entities';
import Entity from './Entity';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/entities" component={Entities} />
          <Route path="/entity/:id" component={Entity} />
          <Route path="*" component={() => <Redirect to="/home" />} />
        </Switch>
      </React.Fragment>
    );
  }
}
