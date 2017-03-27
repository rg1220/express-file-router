var Response = require('../../response');
var Promise = require('bluebird');

module.exports = function(request) {
  return Promise.try(function() {
    return new Response(200, {
      method: 'POST',
      path: '/'
    });
  });
};