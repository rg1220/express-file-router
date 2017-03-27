var path = require('path');
var fileRouter = require('../index');
var app = require('express')();
var router = fileRouter.load(path.join(__dirname, 'routes'), { usePromise: true });
app.use(router);
app.listen(1337, function() {
  console.log('Listening on 1337');
});