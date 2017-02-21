import React, {PropTypes} from 'react';
import ItemThumb from './ItemThumb';
import '../styles/Tooltip.scss';

class Tooltip extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const props = this.props;

    return (
      <div className="tooltip-content">
        <header>
          <ItemThumb
            image={props.img}
            name={props.dname} />

          <h2>{props.dname}</h2>
          <h3>{props.cost}</h3>
        </header>
        <p dangerouslySetInnerHTML={{ __html: props.desc}} />
        <p dangerouslySetInnerHTML={{ __html: props.attrib}} />
        <p>Cooldown: {props.cd}</p>
        <p>Mana Cost: {props.mc}</p>
        {props.secret_shop}
        {props.side_shop}
        <blockquote>{props.lore}</blockquote>
      </div>
    );
  }
}

Tooltip.propTypes = {
  attrib: PropTypes.string,
  cd: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]), // Cooldown
  components: PropTypes.array,
  cost: PropTypes.number.isRequired,
  desc: PropTypes.string,
  dname: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  lore: PropTypes.string,
  mc: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]), // Mana Cost
  secret_shop: PropTypes.number.isRequired,
  side_shop: PropTypes.number.isRequired,
};

export default Tooltip;