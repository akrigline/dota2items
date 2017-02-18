export function compileItemArray() {
  let items = require('../constants/itemData.json');
  let itemData = items.itemdata;
  itemData = Object.keys(itemData).map(key => itemData[key])
  return itemData;
}