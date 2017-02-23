import React, {PropTypes} from 'react';

import './ItemThumb.scss';

const ItemThumb = (props) => {
  const thumbSize = props.size + '-thumb';

  return (
    <div className={`item-thumb-wrapper ${thumbSize}`}>
      <img
        src={`./images/${props.image}`}
        alt={props.name} />
    </div>
  );
};

ItemThumb.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'normal',
    'small'
  ]).isRequired
};

export default ItemThumb;
