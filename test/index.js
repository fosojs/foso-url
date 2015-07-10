'use strict';

var furl = require('../lib');
var secureLocation = {
  protocol: 'https:'
};
var nonSecureLocation = {
  protocol: 'http:'
};

describe('Foso URL', function() {
  it('on non-secure page', function() {
    var createUrl = furl('/some-path', nonSecureLocation);

    expect(createUrl('index.js')).toBe('http://example.com/some-path/index.js');
  });

  it('on secure page', function() {
    var createUrl = furl('/some-path/', secureLocation);

    expect(createUrl('index.js')).toBe('https://secure.example.com/some-path/index.js');
  });

  it('return always correct URL', function() {
    var createUrl = furl('/some-path\\', nonSecureLocation);

    expect(createUrl('\\foo\\index.js'))
      .toBe('http://example.com/some-path/foo/index.js');
  });
});
