var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render('../views/signup');
};

exports.signin = function(req, res) {
  res.render('../views/signin');
};

exports.dashboard = function(req, res) {
  res.render('/dashboard');
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
};
