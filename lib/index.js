'use strict';

var path = require('path');

function normalize(path) {
  return path.replace(/\\/g, '/');
}

function furl(basePath, location) {
  var l = location || window.location;
  basePath = normalize(basePath);

  var isSecure = l.protocol === 'https:';
  var host = isSecure ? __secureHost : __host;
  var origin = l.protocol + '//' + host;

  return function(relativeUrl) {
    relativeUrl = normalize(relativeUrl);
    return origin + path.join(basePath, relativeUrl);
  };
}

module.exports = furl;
