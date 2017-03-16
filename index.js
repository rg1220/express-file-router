var path = require('path');
var fs = require('fs');
var Router = require('express').Router;

function LoadFolder(folder) {
  var router = Router();
  var files = fs.readdirSync(folder);

  var routerIndex = files.indexOf('router.js');
  if (routerIndex !== -1) {
    router = require(path.join(folder, 'router.js'))(router);
    files.splice(routerIndex, 1);
  }

  files.forEach(function(file) {
    var filepath = path.join(folder, file);
    if (fs.statSync(filepath).isDirectory()) {
      router.use('/' + file, LoadFolder(filepath, file));
    } else if (fs.statSync(filepath).isFile()) {
      var method = file.replace('.js', '').toLowerCase();
      router[method]('/', require(filepath));
    }
  });

  return router;
}

module.exports.load = LoadFolder;