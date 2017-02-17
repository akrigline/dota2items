import React from 'react';
import ItemGrid from '../containers/ItemGrid';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const ItemLayoutPage = () => {
  return (
    <div>
      <h2 className="alt-header">Items</h2>
      <ItemGrid />
    </div>
  );
};

export default ItemLayoutPage;
