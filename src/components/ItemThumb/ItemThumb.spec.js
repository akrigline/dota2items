import React from 'react';
import {shallow} from 'enzyme';
import ItemThumb from './ItemThumb';

describe('<ItemThumb />', () => {
  const props = {
    image: "hood_of_defiance_lg.png?3",
    name: "Hood of Defiance"
  };

  it('should be an <div />', () => {
    const wrapper = shallow(<ItemThumb {...props} />);
    const actual = wrapper.type();
    const expected = 'div';

    expect(actual).toEqual(expected);
  });

  it('should have a class name of "item-thumb-wrapper"', () => {
    const wrapper = shallow(<ItemThumb {...props} />);
    const actual = wrapper.prop('className');
    const expected = 'item-thumb-wrapper';

    expect(actual).toEqual(expected);
  });

  it('should have an <img />', () => {
    const wrapper = shallow(<ItemThumb {...props} />);
    const actual = wrapper.find('img').length;

    expect(actual).toEqual(1);
  });

  it('should have a src of a modified props.image', () => {
    const wrapper = shallow(<ItemThumb {...props} />);
    const actual = wrapper.find('img').prop('src');
    const expected = `./images/${props.image}`;

    expect(actual).toEqual(expected);
  });

  it('should have an alt of props.name', () => {
    const wrapper = shallow(<ItemThumb {...props} />);
    const actual = wrapper.find('img').prop('alt');
    const expected = props.name;
    
    expect(actual).toEqual(expected);
  });
});
