import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import itemInformation from './itemsReducer';
import layout from './layoutReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  itemInformation,
  layout,
  routing: routerReducer
});

export default rootReducer;
