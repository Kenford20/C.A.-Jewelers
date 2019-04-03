const express = require('express');
const router = express.Router();

// Product Model
const Product = require('../../../models/product');

// route:       GET api/all-rings
// description: gets all ring products
router.get('/', (req, res) => {
    Product.find({category: "engagement ring"})
    .then(products => {
        console.log(products);
        res.json(products)
    }).catch(err => {
        console.log(err);
    })
});

module.exports = router;