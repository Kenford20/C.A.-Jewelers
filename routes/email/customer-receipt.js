require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME_CUSTOMER_RECEIPTS,
    pass: process.env.EMAIL_PASSWORD_CUSTOMER_RECEIPTS
  }
});

router.post('/', async(req, res) => {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME_CUSTOMER_RECEIPTS,
        to: req.body.customerEmail,
        subject: 'Your C.A. Jewelers order has been confirmed',
        text: 'Thank you for choosing C.A. Jewelers as your jeweler!',
        html: '<p>We are getting your order prepared to be shipped. You will be notified when it was been sent.</p>'
    };

    try {
        console.log('sending confirmation email')
        let info = await transporter.sendMail(mailOptions)
        console.log("Message sent: %s", info.messageId);
    } catch(err) {
        console.log(err);
        res.status(500);
    }
});

module.exports = router;