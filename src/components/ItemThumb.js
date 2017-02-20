import React, {PropTypes} from 'react';
// import { Link } from 'react-router';

const ItemThumb = (props) => {
  return (
    <img
      src={`../resources/images/${props.image}`}
      alt={props.name} />
  );
};

ItemThumb.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ItemThumb;
