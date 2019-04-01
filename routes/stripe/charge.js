require('dotenv').config();
const express = require('express');
const stripeLoader = require('stripe');
const router = express.Router();

const stripe = new stripeLoader(process.env.SECRET_STRIPE_KEY);

const charge = (token, amount) => {
    return stripe.charges.create({
        amount: amount * 100,
        current: 'usd',
        source: token,
        description: 'description'
    });
}

router.post('/', async(req, res) => {
    try {
        console.log(req.body)
        // let data = await charge(req.body.token, req.body.amount);
        // console.log(data);
        res.send('Successfully charged the card!');
    } catch(err) {
        console.log(err);
        res.status(500);
    }
});

module.exports = router;