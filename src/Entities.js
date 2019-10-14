import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { SectionWrapper } from './bulma-helpers';
import * as Actions from './store/actions';

class Entities extends Component {
  constructor(props) {
    super(props);
    props.actions.fetchEntitiesIfNeeded();
  }

  static propTypes = {
    bots: PropTypes.array.isRequired,
    actions: PropTypes.shape({
      fetchEntitiesIfNeeded: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { bots } = this.props;

    if (bots === null) {
      return <section className="entities loading">Loading...</section>;
    }

    if (!bots.length) {
      return <section className="entities">Loading...</section>;
    }

    return (
      <SectionWrapper className="entities">
        <ul>
          {bots.map(entity => (
            <li key={entity.id}>
              <Link to={`/entity/${entity.id}`}>{entity.name}</Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    );
  }
}

const mapStateToProps = state => ({
  bots: state.entities,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entities);
