import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/itemActions';
import FilterList from '../../components/FilterList/FilterList';

export const Filters = (props) => {
  return (
    <FilterList 
      changeShop={props.actions.changeShop}
      shop={props.shop} />
  );
};

Filters.propTypes = {
  shop: PropTypes.oneOf([
    'side',
    'secret',
    'basics',
    'upgrades'
  ])
};

function mapStateToProps(state) {
  return {
    shop: state.layout.shop
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
