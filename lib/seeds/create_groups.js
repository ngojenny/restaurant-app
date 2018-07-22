const Group = require('../models/Group')
const users = require('./create_users')
const restaurants = require('./create_restaurants')

const groups = []

console.log('users', users)

const groupOne = new Group({
  name: 'Group One',
  users: [users[0], users[1], users[2]],
  restaurants: [restaurants[0], restaurants[1]],
})

groups.push(groupOne)

const groupTwo = new Group({
  name: 'Group Two',
  users: [users[2], users[3]],
  restaurants: [restaurants[2]],
})

groups.push(groupTwo)

module.exports = groups