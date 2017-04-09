# express-file-router

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

Node.js file-based routing middleware for express.

## How to use

This example shows how you can load a full directory of
method-named files to add to an express router. The router
creates a new router for each folder thus it routes to each
file as you would expect.

Assume you have a folder named `endpoints` with this structure:
```
.
├── api
│   ├── get.js
│   ├── router.js
│   └── v1
│       ├── cars
│       │   ├── id
│       │   │   ├── get.js
│       │   │   └── route.js
│       │   ├── get.js
│       │   └── post.js
│       └── get.js
├── get.js
└── post.js
```

You would simple add the express-file-router middleware:

```js
var express = require('express')
var fileRouter = require('express-file-router')

var app = express()

//Load all files in endpoints
app.use(fileRouter.load(path.join(__dirname, 'endpoints')));
```

### load ( directory, options )

The call returns a router that will auto-load a directory of routes.

Options can contain the following:
 * `usePromise` - true|false Method files must return a promise that resolves a Response object

## Method Files

### [method].js

Any method function that express router provides.

Example: `get.js`
```js
module.exports = function(req, res, next) {
    res.json({
        message: 'This is the response to a GET request'
    });
}
```

If `usePromise: true` then use a promise instead:
```js
var Promise = require('bluebird');
var Response = require('express-file-router').Response;

module.exports = function(request) {
    return Promise.try(function() {
        return new Response(200, {
            message: 'This is the response to a GET request'
        })
    });
}
```

### router.js

A router is passed in to set any necessary middleware.

Must return a valid router.

Example: `router.js`
```js
module.exports = function(router) {
    return router.use(bodyParser.json());
}
```

### route.js

Return a route string which replaces the folder name.

Note that on linux filesystems, colon and other characters are allowed. Thus you don't necessarily need a `route.js`
file to specify a route with a parameter. However, it's still recommended to use a colon since Windows does not allow
special characters in file names.

Example: `route.js`
```js
module.exports = function() {
    return ':someparam';
}
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-file-router.svg
[npm-url]: https://npmjs.org/package/express-file-router
[downloads-image]: https://img.shields.io/npm/dm/express-file-router.svg
[downloads-url]: https://npmjs.org/package/express-file-router