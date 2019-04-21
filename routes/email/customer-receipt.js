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

const getDate = () => {
  const today = new Date();
  const date = `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`;
  const time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return date + ' at ' + time;
}

router.post('/', async(req, res) => {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME_CUSTOMER_RECEIPTS,
        to: req.body.orderDetails.checkoutEmail,
        subject: 'Your C.A. Jewelers order has been confirmed',
        html: `
            <h2>Thank you for choosing C.A. Jewelers as your jeweler!</h2>
            <p>Your order number is: 123<p>
            <p>Your order was placed on: ${getDate()}</p>
            <p>We are getting your order prepared to be shipped. You will be notified when it was been sent.</p>
            <p>If you have any questions/concerns regarding your order, please contact us ASAP at 123-456-7890 or email us at service@cajewelers.com</p>
        `
    };

    try {
        console.log('sending confirmation email')
        console.log(req.body)
        await transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err)
            } else {
                console.log('sending response to front end');
                res.send('Successfully sent confirmation email!');
                //res.redirect('/contact');
            }
        });
    } catch(err) {
        console.log(err);
        res.status(500);
    }
});

module.exports = router;