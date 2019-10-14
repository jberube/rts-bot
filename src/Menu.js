import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg'
import './index.scss'

const menuItems = [
  { key: 'home', label: 'Home' },
  { key: 'entities', label: 'Entities' }
];

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <Link to={`/home`} className="navbar-item">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
          <div className="navbar-menu">
            {menuItems.map(mi => (
              <Link to={`/${mi.key}`} key={`${mi.key}`} className="navbar-item">
                {mi.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}
