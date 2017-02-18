// const Dota2Api = require('dota2-api');

// const request = require('request');

import * as types from '../constants/actionTypes';
// import {API_KEY} from '../constants/config';

function compileItemArray() {
  // const apiItemInfo = getItemInfo();
  // const itemData = getItemData();
  // let itemArray = itemData;
  // debugger;

  let items = require('../constants/itemData.json');
  let itemData = items.itemdata;
  itemData = Object.keys(itemData).map(key => itemData[key])
  console.log(itemData)
  return itemData;
}

export function updateItemInfo() {
    return {
      type: types.SAVE_ITEM_INFO,
      itemInfo: compileItemArray()
    };
}

// function getItemInfo() {
//   debugger;
//   const da = Dota2Api.create(API_KEY);

//   da.getGameItems().then(
//     (result) => {
//       result = JSON.parse(result);
//       result = result.items;
//       return result;
//     }, (error) => {
//       console.error(error);
//       const backupItemFile = require('../constants/items.json');
//       let result = backupItemFile.result.items;
//       return result;
//     }
//   );
// }

// function getItemData() {
//   const url = "http://www.dota2.com/jsfeed/itemdata?l=english";
//   request(url, handleResponse);

//   function handleResponse(err, resp, body) {
//     if (!err || (resp && resp.statusCode == 200)) {
//       body = JSON.parse(body);
//     } else {
//       console.error(err)
//       body = require('../constants/itemData.json');
//     }

//     let itemData = body.itemdata;
//     itemData = Object.keys(itemData).map(key => itemData[key])

//     return itemData;
//   }
// }

