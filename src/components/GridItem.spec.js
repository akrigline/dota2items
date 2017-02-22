import React from 'react';
import {shallow} from 'enzyme';
import ReactToolTip from 'react-tooltip';
import GridItem from './GridItem';
import ItemThumb from './ItemThumb';
import Tooltip from './Tooltip';

describe('<GridItem />', () => {
  const demoItem = {
    "id": 131,
    "img": "hood_of_defiance_lg.png?3",
    "dname": "Hood of Defiance",
    "qual": "epic",
    "cost": 1725,
    "desc": "Active: Creates a spell shield that absorbs up to 325 magical damage.",
    "notes": "Stacks multiplicatively with other sources of spell resistance.",
    "attrib": "+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">30%</span> <span class=\"attribValText\">Spell Resistance</span><br />\nBARRIER BLOCK: <span class=\"attribVal\">325</span><br />\nBARRIER DURATION: <span class=\"attribVal\">12.000000</span>",
    "mc": 75,
    "cd": 60,
    "lore": "A furred, magic resistant headpiece that is feared by wizards.",
    "components": [
      "ring_of_health",
      "cloak",
      "ring_of_regen"
    ],
    "created": true,
    "name": "item_hood_of_defiance",
    "secret_shop": 0,
    "side_shop": 0,
    "recipe": 0
  };

  const props = {
    item: demoItem
  };

  it('should be a <figure> element', () => {
    const wrapper = shallow(<GridItem {...props} />);
    const actual = wrapper.type();
    const expected = 'figure';

    expect(actual).toEqual(expected);
  });

  it('should have the \'grid-item\' class', () => {
    const wrapper = shallow(<GridItem {...props} />);
    const actual = wrapper.prop('className');
    const expected = 'grid-item';

    expect(actual).toEqual(expected);
  });

  it('should contain <ItemThumb />', () => {
    const wrapper = shallow(<GridItem {...props} />);
    expect(wrapper.find(ItemThumb).length).toEqual(1);
  });

  it('should contain <ReactTooltip />', () => {
    const wrapper = shallow(<GridItem {...props} />);
    expect(wrapper.find(ReactToolTip).length).toEqual(1);
  });

  it('should contain <Tooltip />', () => {
    const wrapper = shallow(<GridItem {...props} />);
    expect(wrapper.find(Tooltip).length).toEqual(1);
  });
});
