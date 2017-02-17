import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import itemInformation from './itemsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  itemInformation,
  routing: routerReducer
});

export default rootReducer;
