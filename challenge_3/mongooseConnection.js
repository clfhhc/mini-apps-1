const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//connect to mongoDB
mongoose.connect('mongodb://localhost/checkoutPurchaseDB');

mongoose.connection.once('open', () => {
    console.log('Mongo DB connectino is up');
} ).on('error', (error) => {
    console.log('Connection error: ', error);
})


