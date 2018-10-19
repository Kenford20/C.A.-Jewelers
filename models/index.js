require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('debug',  true);
mongoose.Promise = global.Promise;
const MONGOURI = process.env.MLABDATABASE;
mongoose
    .connect(MONGOURI, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

module.exports.Product = require('./product');