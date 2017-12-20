import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as Actions from './store/actions'

class Entities extends Component {
  constructor(props) {
    super(props);
    props.actions.fetchEntitiesIfNeeded();
  }

  render() {
    const { bots } = this.props;

    if (bots === null) {
      return (<section className="entities loading">
        Loading...
      </section>);
    }

    if (!bots.length) {
      return (<section className="entities">Loading...</section>);
    }

    return (<section className="entities">
      <ul>{
        bots.map(entity => (<li key={entity.id}><Link to={`/entity/${entity.id}`}>{entity.name}</Link></li>))
      }</ul>
    </section>);
  }
}

Entities.propTypes = {
  bots: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    fetchEntitiesIfNeeded: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  bots: state.entities
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entities);
