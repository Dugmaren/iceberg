const passport = require('passport');
const auth_controller = require('../controllers/auth_controller');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  // SIGN IN - GOOGLE
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log('ROUTES/AUTHROUTES - /auth/google/callback');
      res.redirect('/dashboard');
    }
  );

  // SIGN IN - Local
  app.get('/auth/local/signin', (req, res) => {
    console.log('ROUTES/AUTHROUTES - /auth/local/signin');
    res.redirect('/');
  });
  app.post(
    '/auth/local/signin',
    passport.authenticate('local-signin', {
      successRedirect: '/dashboard',
      failureRedirect: '/auth/local/signin',
    })
  );

  // SIGN UP
  app.get('/auth/signup', (req, res) => {
    console.log('ROUTES/AUTHROUTES - /auth/signup');
    res.redirect('/auth/signup');
  });
  app.post(
    '/auth/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/dashboard',
      failureRedirect: '/auth/signup',
    })
  );

  // DASHBOARD?
  app.get('/dashboard', requireLogin, (req, res) => {
    console.log('ROUTES/AUTHROUTES - /dashboard');
    res.redirect('/dashboard');
  });

  // LOGOUT
  app.get('/api/logout', auth_controller.logout, (req, res) => {
    console.log('ROUTES/AUTHROUTES - /api/logout');
    res.redirect('/');
  });

  // CURRENT USER
  app.get('/api/current_user', (req, res) => {
    // double checking that req.user exists, which should have been setup
    // by the passport's authentication function, indicating that the
    // user went through the authentication flow successfully.
    console.log('ROUTES/AUTHROUTES - /api/current_user');
    res.send(req.user);
  });
};
