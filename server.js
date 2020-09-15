require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// const privateRoutes = require('./routes/private.routes');

// Parse json response
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

// Serve other pages
// app.use(privateRoutes.routes);

// Serve start page
app.get('/ping', (req, res, next) => {
    res.status(200).send({
        message: 'pong'
    })
});

app.listen(process.env.PORT||4000);
