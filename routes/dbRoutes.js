/*
 *
 * MAKE SURE you've allowed your IP GoDaddy / cPanel / Remote MySQL
 * 
 */

const passport = require('passport');
const mysql = require('mysql');
const keys = require('../config/keys.js');

module.exports = app => {
  app.get('/actions/connect', (req, res) => {

    var connection = mysql.createConnection({
        host : keys.db_hostName,
        user : keys.db_userName,
        password : keys.db_password,
        database : keys.db_name
    });

    connection.connect();
    connection.query('SELECT * FROM user', function (err, rows, fields) {
        if(err) throw err;

        for(let i = 0; i < 5; i++)
            console.log('Login 1: ', rows[i]);
    })
    connection.end();

    res.redirect('/');
  });
};
