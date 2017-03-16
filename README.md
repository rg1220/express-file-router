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
│       │   ├── :id*
│       │   │   └── get.js
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

### router.js

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

[npm-image]: https://img.shields.io/npm/v/express-file-router.svg
[npm-url]: https://npmjs.org/package/express-file-router
[downloads-image]: https://img.shields.io/npm/dm/express-file-router.svg
[downloads-url]: https://npmjs.org/package/express-file-router