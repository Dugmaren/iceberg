const express = require('express');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const env = require('dotenv').load();
const models = require('./models');
const keys = require('./config/keys');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: keys.sessionCookieSecret, 
                resave: true,                   // resave puts session in store
                //cookie: { secure: true },     // only works under HTTPS:\\
                saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/dbRoutes')(app);
require('./routes/authRoutes')(app, passport);
require('./services/passport')(passport, models.user);
/*
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
*/

models.sequelize
  .sync()
  .then(function() {
    console.log('Nice! Database looks fine!');
  })
  .catch(function(err) {
    console.log(err, 'Something went wrong with the Database Update!');
  });

app.listen(PORT);
