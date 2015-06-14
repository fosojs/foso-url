'use strict';

module.exports = function (config) {
  config.set({

    basePath: '.',

    exclude: [],

    preprocessors: {
      './test/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      insertGlobalVars: {
        __host: function() {return '\'example.com\'';},
        __secureHost: function() {return '\'secure.example.com\'';}
      }
    },

    frameworks: ['browserify', 'jasmine'],

    colors: true,

    logLevel: config.LOG_INFO,

    port: 9876,

    browsers: [
      'PhantomJS'
    ],

    autoWatch: false,

    singleRun: true
  });
};
