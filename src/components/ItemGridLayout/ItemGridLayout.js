import React, {PropTypes} from 'react';
import GridItem from '../GridItem/GridItem';
import './ItemGridLayout.scss';
import {basics, upgrades, secret, side} from '../../constants/shopLayoutOrder';

class ItemGridLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const {itemList, shop} = this.props;

    const shopLists = {
      basics,
      upgrades,
      secret,
      side
    };

    const getCorrespondingItem = (itemName) => {
      const itemFiltered = itemList.filter((item) => {
        return item.name === itemName;
      });
      return itemFiltered[0];
    };

    return (
      <div className="grid-layout">
        {shopLists[shop].map(
          (column, index) =>
            <div className="grid-column" key={index}>
              {column.map(
                (entry, index) => {
                  const correspondingItem = getCorrespondingItem(entry);
                  return correspondingItem && <GridItem item={correspondingItem} key={index} />;
                }
              )}
            </div>
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
