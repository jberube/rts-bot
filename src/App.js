import React, { Component } from 'react'
// import { Route } from 'react-router'
import { Route } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import Menu from './Menu'
import Home from './Home'
import Entities from './Entities'
// import Entity from './Entity'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <Menu />
        <Route path="/home" component={Home} />
        <Route path="/entities" component={Entities} />
        {/* <Route path="/entity/:id" component={Entity} /> */}
      </div>
    );
  }
}
