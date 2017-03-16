module.exports = function(req, res) {
  res.json({
    method: 'POST',
    path: '/api/v1/cars'
  });
};