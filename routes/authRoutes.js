const passport = require('passport');
const auth_controller = require('../controllers/auth_controller');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) =>  {
      res.redirect('/about');
    }
  );
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/auth/local/signup', auth_controller.signup);
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/local/signup'
  }));

  app.get('/auth/local/signin', auth_controller.signin);
  app.post('/auth/local/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/local/signin'
  }));

  app.get('/dashboard', requireLogin, auth_controller.dashboard);
  app.get('/logout', auth_controller.logout);
};