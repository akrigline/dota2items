import React from 'react';
import {shallow} from 'enzyme';
import {ItemGrid} from './ItemGrid';
import ItemGridLayout from '../../components/ItemGridLayout/ItemGridLayout';

describe('<ItemGrid />', () => {
  it('should contain <ItemGridLayout />', () => {
    const actions = {
      updateItemInfo: () => { },
    };
    const itemList = [];
    const shop = '';

    const wrapper = shallow(<ItemGrid actions={actions} itemList={itemList} shop={shop} />);

    expect(wrapper.find(ItemGridLayout).length).toEqual(1);
  });
});
