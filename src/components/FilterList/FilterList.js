import React, {PropTypes} from 'react';
import './FilterList.scss';

class FilterList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const props = this.props;

    return (
      <div>
        <button onClick={() => props.changeShop('side')}>Side Shop</button>
        <button onClick={() => props.changeShop('secret')}>Secret Shop</button>
        <button onClick={() => props.changeShop('basics')}>Basics</button>
        <button onClick={() => props.changeShop('upgrades')}>Upgrades</button>
      </div>
    );
  }
}

FilterList.propTypes = {
  changeShop: PropTypes.func.isRequired,
  shop: PropTypes.string.isRequired
};

export default FilterList;
