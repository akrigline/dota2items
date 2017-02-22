import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/itemActions';
import ItemGridLayout from '../../components/ItemGridLayout/ItemGridLayout';

const ItemGrid = (props) => {
  return (
    <ItemGridLayout 
      itemList={props.itemList}
      getItems={props.actions.updateItemInfo}
      shop={props.shop} />
  );
};

ItemGrid.propTypes = {
  itemList: PropTypes.array.isRequired,
  shop: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    itemList: state.itemInformation.itemList,
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
)(ItemGrid);
