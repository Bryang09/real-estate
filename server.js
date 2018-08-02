const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const apartment = require('./routes/api/apartments');
const houses = require('./routes/api/houses');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.use('/api/apartments', apartment);
app.use('/api/houses', houses);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on Port ${port}`))