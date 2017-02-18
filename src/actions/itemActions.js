import * as types from '../constants/actionTypes';

import {compileItemArray} from '../utils/itemHelper';

export function updateItemInfo() {
  return {
    type: types.SAVE_ITEM_INFO,
    itemInfo: compileItemArray()
  };
}
