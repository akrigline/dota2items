import React, {PropTypes} from 'react';
import ReactTooltip from 'react-tooltip';
import Tooltip from '../Tooltip/Tooltip';
import ItemThumb from '../ItemThumb/ItemThumb';
import './GridItem.scss';

class GridItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {item} = this.props;
    return (
      <figure className="grid-item" data-tip data-for={item.id.toString()}>
        <ItemThumb
          image={item.img}
          name={item.dname} />

        <ReactTooltip 
          id={item.id.toString()}
          place="left" 
          effect="solid"
          class="tooltip">
          <Tooltip {...item} />
        </ReactTooltip>
      </figure>
    );
  }
}

GridItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default GridItem;
