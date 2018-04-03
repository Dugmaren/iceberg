const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mysql = require('mysql');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({
          where: {
            email: email,
          },
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: 'That email is already taken',
            });
          } else {
            var userPassword = generateHash(password);

            var data = {
              email: email,
              password: userPassword,
              name: req.body.name,
            };

            User.create(data).then(function(newUser, created) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );

  passport.use(
    'local-signin',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var User = user;

        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({where: {email: email}})
          .then(user => {
            if (!user) {
              console.log('Email does not exist.');
              return done(null, false);
            }

            if (!isValidPassword(user.password, password)) {
              console.log('Incorrect password.');
              return done(null, false);
            }
            console.log('Found user by email - ' + user.email);
            var userinfo = user.get();
            return done(null, userinfo);
          })
          .catch(function(err) {
            console.log('Error:', err);
            return done(null, false);
          });
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true,
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({where: {google_id: profile.id}}).then(user => {
          if (!user) {
            // don't forget profile.image.url
            console.log(
              'User (' +
                profile.displayName +
                ') ID (' +
                profile.id +
                ') NOT found, adding.'
            );
            new User({
              google_id: profile.id,
              name: profile.displayName,
            })
              .save()
              .then(user => done(null, user));
          } else {
            console.log('User ID (' + profile.id + ') found.');
            done(null, user);
          }
        });
      }
    )
  );
};


/*      
      //      console.log('Access Token: ', accessToken);
      //      console.log('Profile: ', profile);
      const existingUser = User.findOne({googleId: profile.id}, err, user => {
        if (err) {
          console.log('Error finding user.');
          return done(err);
        }

        if (user) {
          console.log('Already have a user! ' + user);
          return done(null, user);
        }

        var connection = mysql.createConnection({
          host: keys.db_hostName,
          user: keys.db_userName,
          password: keys.db_password,
          database: keys.db_name,
        });

        connection.connect();

        connection.query(
          'SELECT * FROM user WHERE google_id = ' + profile.id,
          function(err, rows, fields) {
            if (err) throw err;

            if (rows[0]) {
              console.log('Found user with Google ID - ' + rows[0].name);
              return done(null, user);
            }

            console.log('New user by Google ID - ' + profile.id);
            return done(null, user);
          }
        );

        connection.end();
        console.log('Find user match for GoogleID (' + profile.id + ')');
        done(null, null);
      });
    }
  )
  */
