'use strict';

var path = require('path');

function furl(basePath, location) {
  var l = location || window.location;

  var isSecure = l.protocol === 'https:';
  var host = isSecure ? '__secureHost' : '__host';
  var origin = l.protocol + '//' + host;

  return function(relativeUrl) {
    return origin + path.join(basePath, relativeUrl);
  };
}

module.exports = furl;
