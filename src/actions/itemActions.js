import * as types from '../constants/actionTypes';

import {compileItemArray} from '../utils/itemHelper';

export function updateItemInfo() {
  return {
    type: types.SAVE_ITEM_INFO,
    itemInfo: compileItemArray()
  };
}

export function changeShop(payload) {
  return {
    type: types.CHANGE_SHOP,
    shop: payload
  };
}
