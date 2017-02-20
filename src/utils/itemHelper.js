import {merge} from 'lodash';
import items from 'dotaconstants/build/items.json';


const removedItems = [
  'cheese_lg.png?3',
  'aegis_lg.png?3',
  'river_painter_lg.png?3',
  'river_painter2_lg.png?3',
  'river_painter3_lg.png?3',
  'river_painter4_lg.png?3',
  'river_painter5_lg.png?3',
  'river_painter6_lg.png?3',
  'river_painter7_lg.png?3'
];
const removedShopItems = [
  'item_cheese',
  'item_aegis',
  'item_river_painter',
  'item_river_painter2',
  'item_river_painter3',
  'item_river_painter4',
  'item_river_painter5',
  'item_river_painter6',
  'item_river_painter7'
];
// qual: epic, artifact, component
export function compileItemArray() {

  let itemData = items;
  itemData = Object.keys(itemData).map(key => itemData[key]);
  itemData = cleanItemData(itemData);

  const itemShops = require('../constants/items.json');
  let itemShopsData = itemShops.result.items;
  itemShopsData = cleanShopsData(itemShopsData);

  let mergedArrays = merge(itemData, itemShopsData);
  return mergedArrays;
}

function cleanItemData(itemData) {
  itemData.forEach(
    (obj) => {
      obj.img = obj.img.replace('/apps/dota2/images/items/', '');
      return obj;
    }
  );
  let filtered = itemData.filter(
    function(item) {
      return this.indexOf(item.img) < 0;
    },
    removedItems
  );
  return filtered;
}

function cleanShopsData(shopsData) {
  let filtered = shopsData.filter(
    function(item) {
      return this.indexOf(item.name) < 0;
    },
    removedShopItems
  );
  filtered = filtered.filter(
    function(item) {
      if (item.recipe !== 1) {
        return true;
      }
      return false;
    }
  );
  return filtered;
}