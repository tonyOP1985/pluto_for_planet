const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan')
const debug = require('debug')('app:startup')

const app = express();

// api endpoints
const songs = require('./routes/songs');
const links = require('./routes/videoLinks');
const dates = require('./routes/dates');
const imageData = require('./routes/imageData');

// express middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
debug('Morgan enabled');

// api routes
app.use('/api/songs', songs);
app.use('/api/links', links);
app.use('/api/dates', dates);
app.use('/api/imagedata', imageData);

// connect to mongoDB
mongoose.connect('mongodb://localhost/pluto-for-planet')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connenct to MongoDB...', err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
