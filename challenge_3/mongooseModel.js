const mongoose = require('mongoose');

//Create Schema and Model

const CheckoutPurchaseSchema = new mongoose.Schema({
    'userid': {type: String, required: true},
    'username' : {type: String, required: true}, 
    'email' : String, 
    'password' : String, 
    'street-address-1' : String, 
    'street-address-2' : String, 
    'city' : String, 
    'state' : String,
    'zip-code' : Number,
    'tel-no' : String,
    'credit-card-no' : Number,
    'expiry-date' : String,
    'cvv' : Number,
    'billing-zip-code' : Number
});

const CheckoutPurchase = mongoose.model('checkoutpurchase', CheckoutPurchaseSchema);

module.exports = CheckoutPurchase;