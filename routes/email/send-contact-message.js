require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME_CONTACT,
    pass: process.env.EMAIL_PASSWORD_CONTACT
  }
});

router.post('/', async(req, res) => {
    const {
        name,
        surname,
        email,
        phone,
        message
    } = req.body.state;

    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL_USERNAME_CONTACT,
        subject: `Contact Form Message from: ${name}`,
        html: `
            <h2>Message from: ${name} ${surname}</h2>
            <p>Email: ${email}<p>
            <p>Phone #: ${phone}</p>
            <p>Message: ${message}</p>
        `
    };

    try {
        console.log('sending contact email')
        console.log(req.body)
        
        await transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err)
            } else {
                console.log('sending response to front end');
                res.send('Successfully sent confirmation email!');
            }
        });
    } catch(err) {
        console.log(err);
        res.status(500);
    }
});

module.exports = router;