import React, {PropTypes} from 'react';

class Tooltip extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {name} = this.props;

    return (
      <div>
        {name}
      </div>
    );
  }
}

Tooltip.propTypes = {
  name: PropTypes.string.isRequired
};

export default Tooltip;
