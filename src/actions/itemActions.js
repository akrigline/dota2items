const request = require('request');

import * as types from '../constants/actionTypes';

function getItemInfo() {
  const url = "http://www.dota2.com/jsfeed/itemdata?l=english";
  request(url, handleResponse);

  function handleResponse(err, resp, body) {
    if (err || resp.statusCode !== 200) {
      throw err;
    }
    body = JSON.parse(body);
    return body.itemdata;
  }
}

export function saveItemInfo() {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_ITEM_INFO,
      itemInfo: getItemInfo()
    });
  };
}
