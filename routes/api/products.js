const express = require('express');
const router = express.Router();

// Product Model
const Product = require('../../models/product');

// route:       GET api/products
// description: gets all products
router.get('/', (req, res) => {
    Product.find()
        //.sort({id: -1})
        .then(products => res.json(products));
});

// route:       POST api/products
// description: creates a product
router.post('/', (req, res) => {
    const newProduct = new Product({
        imagePath: req.body.imagePath,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })

    newProduct.save().then(product => res.json(product));
});


module.exports = router;