module.exports = function(req, res) {
  res.json({
    method: 'GET',
    path: '/api/v1/cars/' + req.params.id
  });
};