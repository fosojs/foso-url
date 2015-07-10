'use strict';

var path = require('path');

function normalize(path) {
  return path.replace(/\\/g, '/');
}

function furl(opts) {
  opts = opts || {};
  var l = opts.location || window.location;
  var dirname = normalize(opts.dirname);

  var isSecure = l.protocol === 'https:';
  var host = isSecure ? opts.secureHost : opts.host;
  var origin = '';
  if (host) {
    origin = l.protocol + '//' + host;
  }
  if (opts.baseURL) {
    origin += normalize(opts.baseURL);
  }

  return function(relativeUrl) {
    relativeUrl = normalize(relativeUrl);
    return origin + path.join(dirname, relativeUrl);
  };
}

module.exports = furl;
