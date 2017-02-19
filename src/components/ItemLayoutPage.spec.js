import React from 'react';
import {shallow} from 'enzyme';
import ItemLayoutPage from './ItemLayoutPage';
import ItemGrid from '../containers/ItemGrid';

describe('<ItemLayoutPage />', () => {
  it('should have a header called \'Items\'', () => {
    const wrapper = shallow(<ItemLayoutPage />);
    const actual = wrapper.find('h2').text();
    const expected = 'Items';

    expect(actual).toEqual(expected);
  });

  it('should have a header with \'alt-header\' class', () => {
    const wrapper = shallow(<ItemLayoutPage />);
    const actual = wrapper.find('h2').prop('className');
    const expected = 'alt-header';

    expect(actual).toEqual(expected);
  });

  it('should display the ItemGrid', () => {
    const wrapper = shallow(<ItemLayoutPage />);
    const actual = wrapper.find(ItemGrid).length;
    
    expect(actual).toEqual(1);
  });
});
