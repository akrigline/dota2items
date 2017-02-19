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
]
// qual: epic, artifact, component
export function compileItemArray() {
  let items = require('../constants/itemData.json');
  let itemData = items.itemdata;
  itemData = Object.keys(itemData).map(key => itemData[key]);

  itemData = cleanItemData(itemData);

  return itemData;
}

function cleanItemData(itemData) {
  let filtered = itemData.filter(
    function(item) {
      return this.indexOf(item.img) < 0;
    },
    removedItems
  );
  console.log(itemData.length, filtered.length);
  return filtered;
}