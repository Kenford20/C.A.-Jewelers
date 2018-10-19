const express = require('express');
const router = express.Router();

// Product Model
const Product = require('../../../models/product');

// route:       GET api/three-stone-engagement-rings
// description: gets all three stone engagement ring products
router.get('/', (req, res) => {
    Product.find({subcategory: "three stone"})
        //.sort({id: -1})
        .then(products => res.json(products));
});

module.exports = router;