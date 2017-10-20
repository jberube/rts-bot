import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Entity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bot: null
    };
  }

  static PropTypes = {
    botId: PropTypes.string.isRequired
  }

  componentDidMount() {
    EntitiesRepo.get(this.props.match.params.id).then(bot => {
      this.setState({ bot });
    });
  }

  render() {
    const bot = this.state.bot;

    if (bot === null) {
      return (<section className="entity loading">
        Loading...
      </section>);
    }

    return <section className="entity">
      <p>ID: { bot.id }</p>
      <p>NAME: { bot.name }</p>
      <p>LINKS:</p>
      <ul>
        <li>Coming soon...</li>
      </ul>
    </section>
  }
}
