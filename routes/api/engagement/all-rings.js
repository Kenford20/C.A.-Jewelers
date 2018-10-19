const express = require('express');
const router = express.Router();

// Product Model
const Product = require('../../../models/product');

// route:       GET api/all-rings
// description: gets all ring products
router.get('/', (req, res) => {
    Product.find({category: "engagement ring"})
        //.sort({id: -1})
        .then(products => res.json(products));
});

module.exports = router;