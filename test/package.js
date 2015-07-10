'use strict';

var furl = require('../lib');

describe('package', function() {
  it('check', function() {
    var createUrl = furl('/some-path/');

    expect(createUrl('/foo/index.js'))
      .toBe('http://example.com/foo/some-path/foo/index.js');
  });
});
