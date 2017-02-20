import React, {PropTypes} from 'react';
import ReactTooltip from 'react-tooltip';
import Tooltip from './Tooltip';
import ItemThumb from './ItemThumb';

class GridItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {item} = this.props;
    return (
      <figure data-tip data-for={item.id}>
        <ItemThumb
          image={item.img}
          name={item.dname} />

        <ReactTooltip 
          id={item.id}
          place="left" 
          effect="solid"
          class="tooltip-theme">
          <Tooltip
            name={item.dname}
            />
        </ReactTooltip>
      </figure>
    );
  }
}

GridItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default GridItem;
