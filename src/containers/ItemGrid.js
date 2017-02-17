import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/itemActions';
import ItemGridLayout from '../components/ItemGridLayout';

export const ItemGrid = (props) => {
  return (
    <ItemGridLayout 
      itemInformation={props.itemInformation} />
  );
};

ItemGrid.propTypes = {
  itemInformation: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    itemInformation: state.itemInformation
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
)(ItemGridLayout);
