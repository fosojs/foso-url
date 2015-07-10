'use strict';

var furl = require('../lib/foso-url');
var secureLocation = {
  protocol: 'https:'
};
var nonSecureLocation = {
  protocol: 'http:'
};

describe('Foso URL', function() {
  describe('absolute URL', function() {
    it('on non-secure page', function() {
      var createUrl = furl({
        dirname: '/some-path',
        location: nonSecureLocation,
        host: 'example.com',
        secureHost: 'secure.example.com'
      });

      expect(createUrl('index.js'))
        .toBe('http://example.com/some-path/index.js');
    });

    it('on secure page', function() {
      var createUrl = furl({
        dirname: '/some-path/',
        location: secureLocation,
        host: 'example.com',
        secureHost: 'secure.example.com'
      });

      expect(createUrl('index.js'))
        .toBe('https://secure.example.com/some-path/index.js');
    });
  });

  describe('fix URL', function() {
    it('return always correct URL', function() {
      var createUrl = furl({
        dirname: '/some-path\\',
        location: nonSecureLocation,
        host: 'example.com',
        secureHost: 'secure.example.com',
        baseURL: '\\base'
      });

      expect(createUrl('\\foo\\index.js'))
        .toBe('http://example.com/base/some-path/foo/index.js');
    });
  });

  describe('relative URL', function() {
    it('no base URL specified', function() {
      var createUrl = furl({
        dirname: '/some-path/',
        location: nonSecureLocation
      });

      expect(createUrl('/foo/index.js'))
        .toBe('/some-path/foo/index.js');
    });

    it('base URL specified', function() {
      var createUrl = furl({
        dirname: '/some-path/',
        location: nonSecureLocation,
        baseURL: '/base-url'
      });

      expect(createUrl('/foo/index.js'))
        .toBe('/base-url/some-path/foo/index.js');
    });
  });

  it('host and base URL specified', function() {
    var createUrl = furl({
      dirname: '/some-path/',
      location: nonSecureLocation,
      baseURL: '/base-url',
      host: 'example.com',
      secureHost: 'secure.example.com'
    });

    expect(createUrl('/foo/index.js'))
      .toBe('http://example.com/base-url/some-path/foo/index.js');
  });
});
