import {SAVE_ITEM_INFO, CHANGE_SHOP} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function itemReducer(state = initialState.itemInformation, action) {
  switch (action.type) {
    case SAVE_ITEM_INFO:
      return objectAssign({}, state, {itemList: action.itemInfo});

    case CHANGE_SHOP:
      return objectAssign({}, state, {shop: action.shop});

    default:
      return state;
  }
}
