import React, {PropTypes} from 'react';
import ItemThumb from '../ItemThumb/ItemThumb';
import './Tooltip.scss';

class Tooltip extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const props = this.props;

    const coins = require('../../resources/icons/gold.png');
    const cooldown = require('../../resources/icons/cooldown.png');
    const mana = require('../../resources/icons/mana.png');

    return (
      <div className="tooltip-content">
        <header>
          <ItemThumb
            size="small"
            image={props.img}
            name={props.dname} />
          <div className="tooltip-header">
            <h2>{props.dname}</h2>
            <h3><img src={coins} alt="Cost" /> {props.cost}</h3>
          </div>
        </header>
        <p dangerouslySetInnerHTML={{ __html: props.desc}} />
        <p dangerouslySetInnerHTML={{ __html: props.attrib}} />
        {props.cd && <p><img src={cooldown} alt="Cooldown" /> {props.cd}</p>}
        {props.mc && <p><img src={mana} alt="Mana Cost" /> {props.mc}</p>}
        {!!props.secret_shop && 'Secret Shop'}
        {!!props.side_shop && 'Side Shop'}
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