import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EntitiesRepo from './EntitiesRepository';

export class Entities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bots: null
    };
  }

  componentDidMount() {
    EntitiesRepo.getAll().then(bots => {
      this.setState({ bots });
    });
  }

  render() {
    const bots = this.state.bots;

    if (bots === null) {
      return (<section className="entities loading">
        Loading...
      </section>);
    }

    return (<section className="entities">
      <ul>{
        bots.map(entity => (<li key={ entity.id }><Link to={`/entity/${ entity.id }`}>{ entity.name }</Link></li>))
      }</ul>
    </section>);
  }
}

export class Entity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bot: null
    };
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
    </section>
  }
};