const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const CheckoutPurchase = require('./mongooseModel');


//set up the server;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.get('/react/react.development.js', (req, res) => {res.sendFile(path.join(__dirname, "node_modules/react/umd/react.development.js"))});
app.get('/react-dom/react-dom.development.js', (req, res) => {res.sendFile(path.join(__dirname, "node_modules/react-dom/umd/react-dom.development.js"))});

app.post('/form',(req, res)=>{
    
})

app.get('/favicon.ico', (req, res) => res.status(204));

const server = http.createServer(app);
server.listen(3000);
