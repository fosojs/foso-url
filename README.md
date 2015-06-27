# foso-url

A URL creator for the scripts bundled with [foso](https://github.com/fosojs/foso).

[![Dependency Status](https://david-dm.org/fosojs/foso-url/status.svg?style=flat)](https://david-dm.org/fosojs/foso-url)
[![Build Status](http://img.shields.io/travis/fosojs/foso-url.svg?style=flat)](https://travis-ci.org/fosojs/foso-url)
[![npm version](https://badge.fury.io/js/foso-url.svg)](http://badge.fury.io/js/foso-url)


## Installation

```
npm install --save foso-url
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
var furl = require('foso-url')(__dirname);

var chatUrl = furl('./chat-box/index.js');
document.write('<script src="' + chatUrl + '"></script>');
```


##License

The MIT License (MIT)
