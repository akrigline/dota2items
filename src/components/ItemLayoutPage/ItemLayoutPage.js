import React from 'react';
import ItemGrid from '../../containers/ItemGrid/ItemGrid';

// Since this component is simple and static, there's no parent container for it.
const ItemLayoutPage = () => {
  return (
    <main>
      <h2 className="alt-header">Items</h2>
      <ItemGrid />
    </main>
  );
};

export default ItemLayoutPage;
