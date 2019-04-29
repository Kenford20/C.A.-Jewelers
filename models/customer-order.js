const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerName:    { type:String, required:true },
    customerEmail:   { type:String, required:true },
    customerPhone:   { type:String, required:true },
    customerAddress: { type:String, required:true },

    orderID:        { type:String, required:true },
    orderDate:      { type:String, required:true },
    orderStatus:    { type:String, required:true },
    productID:      { type:Array, required:true }, // name of product
    quantity:       { type:Array, required:true },
    productDetails: { type:Array, required:false }, // additional info about the product, maybe ring size
    price:          { type:String, required:true },
    paymentMethod:  { type:String, required:true },
    cardNum_last4:  { type:Number, required:true }
}, { collection: 'orders' });

module.exports = mongoose.model('Order', orderSchema);