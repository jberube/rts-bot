import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { key: 'home', label: 'Home' },
  { key: 'entities', label: 'Entities' }
];

export default class Menu extends Component {
  render() {
    return (<div className="menu">
      <ul>
        {menuItems.map(mi => (<li key={mi.key}><Link to={`/${mi.key}`}>{mi.label}</Link></li>))}
      </ul>
    </div>);
  }
}
