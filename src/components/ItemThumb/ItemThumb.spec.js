import React from 'react';
import {shallow} from 'enzyme';
import ItemThumb from './ItemThumb';

describe('<ItemThumb />', () => {
  const props = {
    image: "hood_of_defiance_lg.png?3",
    name: "Hood of Defiance"
  };

  it('should have be an <img />', () => {
    const wrapper = shallow(<ItemThumb {...props} />);
    const actual = wrapper.type();
    const expected = 'img';

    expect(actual).toEqual(expected);
  });

  it('should have a src of a modified props.image', () => {
    const wrapper = shallow(<ItemThumb {...props} />);
    const actual = wrapper.prop('src');
    const expected = `../resources/images/${props.image}`;

    expect(actual).toEqual(expected);
  });

  it('should have an alt of props.name', () => {
    const wrapper = shallow(<ItemThumb {...props} />);
    const actual = wrapper.prop('alt');
    const expected = props.name;
    
    expect(actual).toEqual(expected);
  });
});
