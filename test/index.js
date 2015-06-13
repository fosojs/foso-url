'use strict';

var furl = require('../lib');
var secureLocation = {
  protocol: 'https:'
};
var nonSecureLocation = {
  protocol: 'http:'
};

describe('Fosify URL', function() {
  it('on non-secure page', function() {
    var createUrl = furl('/some-path', nonSecureLocation);

    expect(createUrl('index.js')).toBe('http://__host/some-path/index.js');
  });

  it('on secure page', function() {
    var createUrl = furl('/some-path/', secureLocation);

    expect(createUrl('index.js')).toBe('https://__secureHost/some-path/index.js');
  });
});