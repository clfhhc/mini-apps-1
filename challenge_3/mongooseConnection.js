const mongoose = require('mongoose');
const CheckoutPurchase = require('./mongooseModel'); //model

//ES6 Promises
mongoose.Promise = global.Promise;


const databaseName = 'checkoutPurchaseDB';
//connect to mongoDB
mongoose.connect('mongodb://localhost/' + databaseName);

let db = mongoose.connection;

db.once('open', () => {
    console.log('Mongo DB connectino is up');
} ).on('error', (error) => {
    console.log('Connection error: ', error);
})

const insertRecord = function(record) {
    record = new CheckoutPurchase(record);
    return new Promise((resolve, reject) => {
        record.save(err => {
            if (err) reject(err);
            resolve(record);
        });
    })
    
};

const retrieveRecordsByUsername = function(username) {
    return new Promise((resolve, reject) => {
        CheckoutPurchase.find({username: username}).exec((err, result) => {
            if (err) reject(err);
            return resolve(result);
        })
    });
}

const retrieveRecordByObjectId = function(_id) {
    return new Promise((resolve, reject) => {
        CheckoutPurchase.findOne({_id: _id}).exec((err, result) => {
            if (err) reject(err);
            return resolve(result);
        })
    });
}

module.exports.db = db;
module.exports.insertRecord = insertRecord;
module.exports.retrieveRecordsByUsername = retrieveRecordsByUsername;
module.exports.retrieveRecordByObjectId = retrieveRecordByObjectId;