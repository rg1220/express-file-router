var Response = require('../../../../response');
var Promise = require('bluebird');

module.exports = function(request) {
  return Promise.try(function() {
    return new Response(200, {
      method: 'GET',
      path: '/api/v1'
    });
  });
};