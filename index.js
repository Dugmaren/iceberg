const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const passport = require('passport');

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
    if(process.env.NODE_ENV === 'production')
        res.send({ hi: 'PRODUCTION!',
                    port: PORT});
    else
        res.send({ hi: 'DEV',
        port: PORT});
    });
/*
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
*/

app.listen(PORT);