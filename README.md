# fosify-url

A URL creator for the scripts bundled with [Fosify](https://github.com/zkochan/fosify).

[![Dependency Status](https://david-dm.org/zkochan/fosify-url/status.svg?style=flat)](https://david-dm.org/zkochan/fosify-url)
[![Build Status](http://img.shields.io/travis/zkochan/fosify-url.svg?style=flat)](https://travis-ci.org/zkochan/fosify-url)
[![npm version](https://badge.fury.io/js/fosify-url.svg)](http://badge.fury.io/js/fosify-url)


## Installation

```
npm install --save fosify-url
```

## Usage

Lets say you have a directory structure like this:

```
my-project
 └── homepage
     ├── chat-box
     │   └── index.bundle.js
     └── main.bundle.js
```

And you want to add a link to the `/my-project/homepage/chat-box/index.js` from `/my-project/homepage/main.js`. How can you possibly know on what domain will your bundled scripts hosted? You can use Fosify URL to generate the correct URL for you. So this is how `main.js` will look like:

```js
var furl = require('fosify-url')(__dirname);

var chatUrl = furl('./chat-box/index.js');
document.write('<script src="' + chatUrl + '"></script>');
```


##License

The MIT License (MIT)