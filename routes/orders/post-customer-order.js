const express = require('express');
const router = express.Router();

// Order Model
const Order = require('../../models/customer-order');

const getDate = () => {
    const today = new Date();
    const date = `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`;
    const time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  
    return date + ' at ' + time;
}

router.post('/', (req, res) => {
    console.log(req.body);
    const { 
        firstName,
        lastName,
        address,
        city,
        state,
        zipCode,
        country,
        checkoutEmail: email,
        phone
    } = req.body.customerInfo;

    const {
        brand,
        last4,
    } = req.body.paymentInfo

    const newOrder = new Order({
        customerName:    `${firstName} ${lastName}`,
        customerEmail:   email,
        customerPhone:   phone,
        customerAddress: `${address}, ${city} ${state}, ${zipCode}, ${country}`,

        orderID:        '123',
        orderDate:      getDate(),
        orderStatus:    'pending',
        productID:      req.body.productInfo.map(product => product.name),
        quantity:       req.body.productInfo.map(product => product.quantity),
        productDetails: req.body.productInfo.map(product => product.ringSize),
        price:          req.body.amount,
        paymentMethod:  brand,
        cardNum_last4:  last4
    })
    newOrder.save()
    .then(product => console.log(product))
    .catch(err => console.log(err));
});

module.exports = router;