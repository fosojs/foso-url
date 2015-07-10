'use strict';

var furl = require('./foso-url');

module.exports = function(dirname) {
  return furl({
    dirname: dirname,
    host: __host,
    secureHost: __secureHost,
    baseURL: __baseURL
  });
};
