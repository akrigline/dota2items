import React, {PropTypes} from 'react';
import ReactTooltip from 'react-tooltip';
import Tooltip from './tooltip';

class GridItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {item} = this.props;

    return (
      <div>
      </div>
    );
  }
}

GridItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default GridItem;
