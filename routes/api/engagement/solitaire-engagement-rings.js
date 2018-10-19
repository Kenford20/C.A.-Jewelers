const express = require('express');
const router = express.Router();

// Product Model
const Product = require('../../../models/product');

// route:       GET api/solitaire-engagement-rings
// description: gets all solitaire engagement ring products
router.get('/', (req, res) => {
    Product.find({subcategory: "solitaire"})
        //.sort({id: -1})
        .then(products => res.json(products));
});

module.exports = router;