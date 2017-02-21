import {CHANGE_SHOP} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function layoutReducer(state = initialState.layout, action) {
  switch (action.type) {
    case CHANGE_SHOP:
      return objectAssign({}, state, {shop: action.shop});

    default:
      return state;
  }
}
