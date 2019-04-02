require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const products = require('./routes/api/products');
const allRings = require('./routes/api/engagement/all-rings');
const haloEngagementRings = require('./routes/api/engagement/halo-engagement-rings');
const solitaireEngagementRings = require('./routes/api/engagement/solitaire-engagement-rings');
const threeStoneEngagementRings = require('./routes/api/engagement/three-stone-engagement-rings');
const vintageEngagementRings = require('./routes/api/engagement/vintage-engagement-rings');

const chargeCustomer = require('./routes/stripe/charge');
const emailReceipt = require('./routes/email/customer-receipt');

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const port = process.env.PORT || 4000;
const app = express();

app.use(helmet());
app.use(cors());

// Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// connecting database
const db = require('./models');
const handle = require('./handlers');

// Use Routes
app.use('/api/products', products);
app.use('/api/all-rings', allRings);
app.use('/api/halo-engagement-rings', haloEngagementRings);
app.use('/api/solitaire-engagement-rings', solitaireEngagementRings);
app.use('/api/three-stone-engagement-rings', threeStoneEngagementRings);
app.use('/api/vintage-engagement-rings', vintageEngagementRings);

app.use('/api/charge', chargeCustomer);
app.use('/api/email-receipt', emailReceipt);

// Set static folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
//app.get('/', (req, res) => res.json({hello:'world'}));

app.use(handle.notFound);
app.use(handle.errorHandler);

app.listen(port, console.log(`Server started on port ${port}`));

