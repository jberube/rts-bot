import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SectionWrapper } from './bulma-helpers';

export default class Home extends Component {
  render() {
    return (
      <SectionWrapper>
        <p className="App-intro">
          <span className="icon is-medium">
            <FontAwesomeIcon icon="home" />
          </span>
          Welcome home.
        </p>
      </SectionWrapper>
    );
  }
}
