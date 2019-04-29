const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    imagePath:   { type:String, required:true },
    title:       { type:String, required:true },
    description: { type:String, required:false },
    price:       { type:Number, required:true },
    category:    { type:String, required:true },
    subcategory: { type:String, required:true },
    stoneShape:  { type:String, required:false },
    metal:       { type:String, required:true },
    link:        { type:String, required:true}
}, { collection: 'products' });

module.exports = mongoose.model('Product', productSchema);