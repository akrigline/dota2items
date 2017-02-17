import React, {PropTypes} from 'react';
import GridItem from './GridItem';

class ItemGridLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const {itemInformation} = this.props;

    return (
      <div>
        {itemInformation && itemInformation.map( 
          (item, index) => 
          <GridItem item={item} key={index} /> 
        )}
      </div>
    );
  }
}

ItemGridLayout.propTypes = {
  getItems: PropTypes.func.isRequired,
  itemInformation: PropTypes.array.isRequired
};

export default ItemGridLayout;
