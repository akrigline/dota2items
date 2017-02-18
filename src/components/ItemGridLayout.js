import React, {PropTypes} from 'react';
import GridItem from './GridItem';
import '../styles/GridLayout.scss';

class ItemGridLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const {itemList} = this.props;

    return (
      <div className="grid-layout">
        {itemList && itemList.map( 
          (item, index) => 
          <GridItem item={item} key={index} /> 
        )}
      </div>
    );
  }
}

ItemGridLayout.propTypes = {
  getItems: PropTypes.func.isRequired,
  itemList: PropTypes.array.isRequired
};

export default ItemGridLayout;
