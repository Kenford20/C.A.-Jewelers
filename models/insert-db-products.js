const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

//const MONGOURI = process.env.MLABDATABASE;
const MONGOURI = process.env.MONGODB_ATLAS_URI

MongoClient.connect(MONGOURI, { useNewUrlParser: true }, function(err, client) {
    console.log('connected')
    const db = client.db("cajewelers");

    db.collection('products').insertMany([
        {
            "imagePath": "https://s3.amazonaws.com/media-cajewelers.com/Aquamarine-Ring.jpg",
            "title": "14K White/Yellow Gold Cushion Cut Vintage Engagement Ring",
            "description": "test description",
            "price": 123.45,
            "category": "engagement ring",
            "subcategory": "vintage",
            "stoneShape": "cushion",
            "metal": "mixed",
            "link": "/engagement-rings/vintage-rings/",
        },
      ])
      .then(function(result) {
        console.log(result)
      })

    // var cursor = db.collection('products').find();

    // function iterateFunc(doc) {
    //     console.log(JSON.stringify(doc, null, 2));
    //  }
     
    //  function errorFunc(error) {
    //     console.log(error);
    //  }
     
    //  cursor.forEach(iterateFunc, errorFunc);
});

module.exports.Product = require('./product');