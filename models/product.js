var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    imagePath:   { type:String, required:true },
    title:       { type:String, required:true },
    description: { type:String, required:false },
    price:       { type:Number, required:true },
    category:    { type:String, required:true },
    subcategory: { type:String, required:true },
    stoneShape:  { type:String, required:false },
    metal:       { type:String, required:true },
    link:        { type:String, required:true}
});

module.exports = mongoose.model('Product', productSchema);