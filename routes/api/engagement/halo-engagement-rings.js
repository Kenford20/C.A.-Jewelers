const express = require('express');
const router = express.Router();

// Product Model
const Product = require('../../../models/product');

// route:       GET api/halo-engagement-rings
// description: gets all halo engagement ring products
router.get('/', (req, res) => {
    Product.find({subcategory: "halo"})
        //.sort({id: -1})
        .then(products => res.json(products));
});

module.exports = router;