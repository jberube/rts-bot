import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SectionWrapper } from './bulma-helpers';
import * as Actions from './store/actions';

export class Entity extends Component {
  static propTypes = {
    bot: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string,
          dist: PropTypes.number.isRequired,
        })
      ).isRequired,
    }),
  };

  static defaultProps = {
    bot: null,
  };

  componentWillMount() {
    this.props.actions.fetchEntityIfNeeded(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.actions.fetchEntityIfNeeded(nextProps.match.params.id);
  }

  render() {
    const { bot } = this.props;

    if (typeof bot !== 'object' || bot === null) {
      return <section className="entity loading">Loading...</section>;
    }

    const linked = bot.links.length ? (
      bot.links.map(link => (
        <li key={link.id}>
          <Link to={`/entity/${link.id}`}>
            {link.name} {link.dist}
          </Link>
        </li>
      ))
    ) : (
      <li>NO LINKS</li>
    );

    return (
      <SectionWrapper className="entity">
        <p>ID: {bot.id}</p>
        <p>NAME: {bot.name}</p>
        <p>LINKS:</p>
        <ul>{linked}</ul>
      </SectionWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  bot: state.entities.find(bot => bot.id === ownProps.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entity);
