const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    if(process.env.NODE_ENV === 'production')
        res.send({ hi: 'PRODUCTION!',
                    port: PORT});
    else
        res.send({ hi: 'DEV',
        port: PORT});
    });

app.listen(PORT);