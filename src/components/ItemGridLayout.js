import React, {PropTypes} from 'react';
import GridItem from './GridItem';

class ItemGridLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {itemInformation} = this.props;

    return (
      <div>
        {itemInformation.map( 
          (item, index) => 
          <GridItem item={item} key={index} /> 
        )}
      </div>
    );
  }
}

ItemGridLayout.propTypes = {
  itemInformation: PropTypes.array.isRequired
};

export default ItemGridLayout;
