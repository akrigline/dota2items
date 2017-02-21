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
    const {itemList, shop} = this.props;

    const filterListBasedOnShop = (shop, itemList) => {
      if (shop === 'secret') {
        itemList = itemList.filter((item) => {
          return item.secret_shop === 1;
        });
      } else if (shop === 'side') {
        itemList = itemList.filter((item) => {
          return item.side_shop === 1;
        });
      } else if (shop === 'basic') {
        itemList = itemList.filter((item) => {
          return !item.created;
        });
      } else if (shop === 'upgrades') {
        itemList = itemList.filter((item) => {
          return item.created;
        });
      }
      return itemList;
    };

    let filteredList = filterListBasedOnShop(shop, itemList);

    return (
      <div className="grid-layout">
        {filteredList && filteredList.map( 
          (item, index) => 
          <GridItem item={item} key={index} /> 
        )}
      </div>
    );
  }
}

ItemGridLayout.propTypes = {
  getItems: PropTypes.func.isRequired,
  itemList: PropTypes.array.isRequired,
  shop: PropTypes.string.isRequired
};

export default ItemGridLayout;
