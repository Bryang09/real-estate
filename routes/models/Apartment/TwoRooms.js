const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TwoApartmentSchema = new Schema({
  src: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip_code: {
    type: Number,
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  rooms: {
    type: String,
    required: true
  }

})

module.exports = Apartments = mongoose.model("two_apartments", TwoApartmentSchema)