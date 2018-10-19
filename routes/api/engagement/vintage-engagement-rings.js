const express = require('express');
const router = express.Router();

// Product Model
const Product = require('../../../models/product');

// route:       GET api/vintage-engagement-rings
// description: gets all vintage engagement ring products
router.get('/', (req, res) => {
    Product.find({subcategory: "vintage"})
        //.sort({id: -1})
        .then(products => res.json(products));
});

module.exports = router;