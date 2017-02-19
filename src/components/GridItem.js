import React, {PropTypes} from 'react';
import ReactTooltip from 'react-tooltip';
import ItemThumb from './ItemThumb';

class GridItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {item} = this.props;
    return (
      <figure>
        <ItemThumb
          image={item.img}
          name={item.dname} />
      </figure>
    );
  }
}

GridItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default GridItem;
