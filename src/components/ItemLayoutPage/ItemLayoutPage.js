import React from 'react';
import ItemGrid from '../../containers/ItemGrid/ItemGrid';
import Filters from '../../containers/Filters/Filters';

// Since this component is simple and static, there's no parent container for it.
const ItemLayoutPage = () => {
  return (
    <main>
      <h2 className="alt-header">Items</h2>
      <Filters />
      <ItemGrid />
    </main>
  );
};

export default ItemLayoutPage;
