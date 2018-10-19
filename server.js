require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const products = require('./routes/api/products');
const allRings = require('./routes/api/engagement/all-rings');
const haloEngagementRings = require('./routes/api/engagement/halo-engagement-rings');
const solitaireEngagementRings = require('./routes/api/engagement/solitaire-engagement-rings');
const threeStoneEngagementRings = require('./routes/api/engagement/three-stone-engagement-rings');
const vintageEngagementRings = require('./routes/api/engagement/vintage-engagement-rings');

const app = express();

// Body parser Middleware
app.use(bodyParser.json());
app.use(cors());

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
//app.get('/', (req, res) => res.json({hello:'world'}));

app.use(handle.notFound);
app.use(handle.errorHandler);


// Set static folder
//app.use(express.static('client/build'));
//app.use(express.static(path.join(__dirname, './client/build')));
//app.use('/static', express.static(path.join(__dirname, 'client/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
    //"build": "cd client && npm build",
    //"heroku-postbuild": "cd client && npm install && npm install --only=dev && npm run build"

  // if (process.env.NODE_ENV === 'production') {
  //   app.use(express.static('client/build'));
  //   app.get('*', (req, res) => {
  //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  //   });
  // }
  
  // else {
  //   app.use(express.static(path.join(__dirname, '/client/public')));
  //   app.get('*', function(req, res) {
  //     res.sendFile(path.join(__dirname, "./client/public/index.html"));
  //   });
  // }

const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server started on port ${port}`));