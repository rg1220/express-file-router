var path = require('path');
var fs = require('fs');
var Router = require('express').Router;

function LoadFolder(folder) {
  var router = Router({ mergeParams : true });
  var folderFiles = fs.readdirSync(folder);

  var routerIndex = folderFiles.indexOf('router.js');
  if (routerIndex !== -1) {
    router = require(path.join(folder, 'router.js'))(router);
    folderFiles.splice(routerIndex, 1);
  }

  var files = [];
  var folders = [];

  folderFiles.forEach(function(file) {
    var stat = fs.statSync(path.join(folder, file));
    if (stat.isDirectory()) {
      folders.push(file);
    } else if (stat.isFile()) {
      files.push(file);
    }
  });

  files.forEach(function(file) {
    var method = file.replace('.js', '').toLowerCase();
    router[method]('/', require(path.join(folder, file)));
  });

  var normalFolders = [];
  var paramFolders = [];

  folders.forEach(function(file) {
    if (file.indexOf(':') !== -1) {
      paramFolders.push(file);
    } else {
      normalFolders.push(file);
    }
  });

  normalFolders.concat(paramFolders).forEach(function(file) {
    router.use('/' + file, LoadFolder(path.join(folder, file)));
  });

  return router;
}

module.exports.load = LoadFolder;