'use strict';

var codes = require('./data/lovecode');

module.exports = codes;

codes.index = function (field) {
  var map = {};

  codes.forEach(function (data) {
    map[data[field]] = data;
  });

  return map;
};
