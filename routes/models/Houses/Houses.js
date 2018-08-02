const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HouseSchema = new Schema({
  src: {
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
  }
})

module.exports = House = mongoose.model("house", HouseSchema)