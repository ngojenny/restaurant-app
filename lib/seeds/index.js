const User = require('../models/User')
const Group = require('../models/Group')
const Restaurant = require('../models/Restaurant')
const users = require('./create_users')
const restaurants = require('./create_restaurants')
const groups = require('./create_groups')
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/restaurant-app'

const truncateDatabase = async () => {
  return Promise.all([User.deleteMany(), Group.deleteMany(), Restaurant.deleteMany()])
}

const makeSeeds = async () => {
  try {
    await mongoose.connect(uri)
    await truncateDatabase()
    await Promise.all(users.map(user => user.save()))
    await Promise.all(groups.map(group => group.save()))
    await Promise.all(restaurants.map(restaurant => restaurant.save()))
    mongoose.connection.close()
  } catch(err) {
    console.log(err)
  }
}

makeSeeds()