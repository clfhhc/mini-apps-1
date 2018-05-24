const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

//set up the database connection
const dbUtil = require('./mongooseConnection'); //connection



//set up the server;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get('/react/react.development.js', (req, res) => {res.sendFile(path.join(__dirname, "node_modules/react/umd/react.development.js"))});
app.get('/react-dom/react-dom.development.js', (req, res) => {res.sendFile(path.join(__dirname, "node_modules/react-dom/umd/react-dom.development.js"))});

app.post('/form',(req, res)=>{
    console.log(req.body);
    dbUtil.insertRecord(req.body)
    .then((record) => dbUtil.retrieveRecordByObjectId(record._id))
    .then((result) => {
        res.statusCode = 201;
        res.send(result);
        res.end();
    })
})


app.get('/id', (req, res) => {
    res.statusCode = 200;
    res.end(baseUserId.toString());
})

app.get('/favicon.ico', (req, res) => res.status(204));

const server = http.createServer(app);
server.listen(3000);
