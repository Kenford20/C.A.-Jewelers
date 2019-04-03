require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('debug',  true);
mongoose.Promise = global.Promise;
const MONGOURI = process.env.MLABDATABASE;
const ATLASURI = process.env.MONGODB_ATLAS_URI;

//const Product = require('./product');

mongoose
    .connect(ATLASURI, {dbName:'cajewelers', useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected...')
        //Product.find().then(data => console.log(data));
    })
    .catch(err => console.log(err));

module.exports.Product = require('./product');