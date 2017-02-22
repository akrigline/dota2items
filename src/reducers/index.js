import { combineReducers } from 'redux';
import itemInformation from './itemsReducer';
import layout from './layoutReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  itemInformation,
  layout,
  routing: routerReducer
});

export default rootReducer;
