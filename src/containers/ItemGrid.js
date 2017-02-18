import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/itemActions';
import ItemGridLayout from '../components/ItemGridLayout';

const ItemGrid = (props) => {
  return (
    <ItemGridLayout 
      itemList={props.itemList}
      getItems={props.actions.updateItemInfo} />
  );
};

ItemGrid.propTypes = {
  itemList: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    itemList: state.itemInformation.itemList
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
)(ItemGrid);
