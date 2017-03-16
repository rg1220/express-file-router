# file-router

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

Node.js file-based routing middleware for express.

### How to use

This example shows how you can load a full directory of
method-named files to add to an express router. The router
keeps the folder path to each file.

```js
var express = require('express')
var fileRouter = require('file-router')

var app = express()

//Load all files in endpoints
app.use(fileRouter.load(path.join(__dirname, 'endpoints')));
```

##

```
└── routes
    ├── api
    │   ├── get.js
    │   ├── router.js
    │   └── v1
    │       ├── get.js
    │       └── test
    │           ├── get.js
    │           └── post.js
    ├── get.js
    └── post.js
```

## Method Files

# [method].js

Any method function that express router provides.

Example: `get.js`
```js
module.exports = function(req, res, next) {
    res.json({
        message: 'This is the response'
    });
}
```

# router.js

A router is passed in to set any necessary middleware.

Must return a valid router.

Example: `router.js`
```js
module.exports = function(router) {
    return router.use(bodyParser.json());
}
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/file-router.svg
[npm-url]: https://npmjs.org/package/file-router
[downloads-image]: https://img.shields.io/npm/dm/file-router.svg
[downloads-url]: https://npmjs.org/package/file-router