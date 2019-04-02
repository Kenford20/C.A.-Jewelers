require('dotenv').config();
const express = require('express');
const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/', (req, res) => {
    console.log(req.body)
    stripe.charges.create({
        amount: req.body.amount * 100,
        currency: 'usd',
        source: req.body.token,
        description: `insert product name`, // this parameter is displayed in the receipt next to the amount paid, so insert product details, like name and size
        receipt_email: `${req.body.orderDetails.checkoutEmail}`
    }).then(() => {
        console.log('successfully charged card');
        res.send('Successfully charged the card!');
    }).catch((err) => {
        console.log(err);
        res.status(500);
    })
});

module.exports = router;