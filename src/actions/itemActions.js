const Dota2Api = require('dota2-api');
// const request = require('request');

import * as types from '../constants/actionTypes';
import {API_KEY} from '../constants/config';

function getItemInfo() {
  const da = Dota2Api.create(API_KEY);

  da.getGameItems().then(
    (result) => {
      console.log('result', result);
      return result;
    }, (error) => {
      console.log('error', error);
    }
  )
  // const url = "http://www.dota2.com/jsfeed/itemdata?l=english";
  // request(url, handleResponse);

  // function handleResponse(err, resp, body) {
  //   if (err || resp.statusCode !== 200) {
  //     throw err;
  //   }
  //   body = JSON.parse(body);
  //   let itemData = body.itemdata;
  //   itemData = Object.keys(itemData).map(key => itemData[key])

  //   return itemData;
  // }
}

export function updateItemInfo() {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_ITEM_INFO,
      itemInfo: getItemInfo()
    });
  };
}
