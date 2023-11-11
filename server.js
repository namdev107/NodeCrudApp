const express = require('express');
const app = express(),
    bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT ? process.env.PORT : 4000;

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});

app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true
}));
app.use(bodyParser.json({
    limit: '100mb',
    extended: true
}));

var routes = require('./app/routes/index'); //importing route 
const { CLIENT_RENEG_LIMIT } = require('tls');
routes(app); //register the route