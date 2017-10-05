import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Menu from './Menu';
import Home from './Home';
import { Entities, Entity } from './Entities';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome</h1>
          </header>
          <Menu />
          <Route path="/home" component={Home} />
          <Route path="/entities" component={Entities} />
          <Route path="/entity/:id" component={Entity} />
          </div>
      </Router>
    );
  }
}

export default App;
