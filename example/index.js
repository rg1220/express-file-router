var path = require('path');
var fileRouter = require('../index');
var app = require('express')();
var router = fileRouter.load(path.join(__dirname, 'routes'));
app.use(router);
app.listen(1337);