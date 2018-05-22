const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.use(express.static(path.join(__dirname, 'client')));

app.options('/', (req,res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.statusCode = 200;
    res.end();
})

app.get('/', (req,res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, 'client/index.html'));
    res.end();
})

app.post('/', (req,res)=> {
    console.log('post "/":', req.body)
    res.statusCode = 302;
    res.end();
})

let server = http.createServer(app);

server.listen(3000, '127.0.0.1');