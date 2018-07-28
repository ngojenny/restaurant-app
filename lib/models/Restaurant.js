const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true
  },
  nearby: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  topPicks: {
    type: Array,
    default: [],
  },
  rating: {
    type: Number,
    required: true,
  },
  tips: {
    type: String,
    required: true
  }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant