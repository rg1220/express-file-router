module.exports = Response;

function Response(responseCode, data) {
  this.responseCode = responseCode || 200;
  this.data = data;
};