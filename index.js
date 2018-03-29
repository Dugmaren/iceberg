const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const env = require('dotenv').load();
const models = require('./models');
const exphbs = require('express-handlebars');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'whatever', 
                resave: true, 
                saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
//require('./services/passport');
require('./routes/dbRoutes')(app);
//require('./routes/authRoutes')(app); // adding passport through tutorial..
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
