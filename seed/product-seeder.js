require('dotenv').config();
var mongoose = require('mongoose');
const db = require('../models');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
const MONGOURI = process.env.MLABDATABASE;

mongoose.connect(MONGOURI, {useNewUrlParser: true})


const resetProducts = async() => {
    await db.Product.remove();
    console.log('deleted products');
}

resetProducts();

var products = [
    new db.Product({
        imagePath: 'someimagepath.com/path',
        title:'Diamond Halo Ring',
        description:'some ring 5 carat 10 diamonds blahblah..',
        price:1000
    }),
    new db.Product({
        imagePath: 'someimagepath.com/path',
        title:'Diamond Halo Ring',
        description:'some ring 5 carat 10 diamonds blahblah..',
        price:1000
    }),
    new db.Product({
        imagePath: 'someimagepath.com/path',
        title:'Diamond Halo Ring',
        description:'some ring 5 carat 10 diamonds blahblah..',
        price:1000
    }),
    new db.Product({
        imagePath: 'someimagepath.com/path',
        title:'Diamond Halo Ring',
        description:'some ring 5 carat 10 diamonds blahblah..',
        price:1000
    }),
    new db.Product({
        imagePath: 'someimagepath.com/path',
        title:'Diamond Halo Ring',
        description:'some ring 5 carat 10 diamonds blahblah..',
        price:1000
    }),
    new db.Product({
        imagePath: 'someimagepath.com/path',
        title:'Sapphire Engagement Ring',
        description:'some ring 5 carat 10 diamonds blahblah..',
        price:1000
    })
];

var doneSaving = false;

for (var i = 0; i<products.length; i++){
    products[i].save();
    console.log('added product');
    console.log(i);
    console.log(products.length);
    if(i === (products.length-1))
        doneSaving = true;
    if(doneSaving){
        console.log('exited');
        exit();
    }
}


function exit(){
    mongoose.disconnect();
}