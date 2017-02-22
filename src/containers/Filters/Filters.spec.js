import React from 'react';
import {shallow} from 'enzyme';
import {Filters} from './Filters';
import FilterList from '../../components/FilterList/FilterList';

describe('<Filters />', () => {
  it('should contain <FilterList />', () => {
    const actions = {
      changeShop: () => { },
    };
    const shop = 'basics';

    const wrapper = shallow(<Filters actions={actions} shop={shop} />);

    expect(wrapper.find(FilterList).length).toEqual(1);
  });
});
