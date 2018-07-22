const User = require('../models/User')
const Group = require('../models/Group')
const Restaurant = require('../models/Restaurant')
// const { users, groups } = require('./create_users_groups')
const restaurants = require('./create_restaurants')
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/restaurant-app'

const truncateDatabase = async () => {
  return Promise.all([User.deleteMany(), Group.deleteMany(), Restaurant.deleteMany()])
}

let users = []
let groups = []

const makeUsers = async () => {
  const emily = new User({
    firstName: 'Emily',
    lastName: 'Giang',
    email: 'emily.giang@gmail.com',
    password: '123',
    groups: []
  })
  
  users.push(emily)
  
  const christine = new User({
    firstName: 'Christine',
    lastName: 'Tran',
    email: 'christine.tran8@hotmail.com',
    password: '123',
    groups: []
  })
  
  users.push(christine)
  
  const jenny = new User({
    firstName: 'Jenny',
    lastName: 'Ngo',
    email: 'jennyngo16@gmail.com',
    password: '123',
    groups: []
  })
  
  users.push(jenny)
  
  const sally = new User({
    firstName: 'Sally',
    lastName: 'Smith',
    email: 'sally@gmail.com',
    password: '123',
    groups: []
  })
  
  users.push(sally)
  try {
    users = await Promise.all(users.map(user => user.save()))
  } catch(err) {
    console.log(err)
  }
}



const updateUsers = async () => {
  try {
    await Promise.all(groups.map(users => users.update()))
  } catch(err) {
    console.log(err)
  }
}

const makeGroups = async () => {
  const groupOne = new Group({
    name: 'Group One',
    users: [users[0], users[1], users[2]],
    restaurants: [],
  })
  
  groups.push(groupOne)
  
  const groupTwo = new Group({
    name: 'Group Two',
    users: [users[2], users[3]],
    restaurants: [],
  })
  
  groups.push(groupTwo)
  
  try {
    await Promise.all(groups.map(group => group.save()))
    users[0].groups.push(groupOne)
    users[1].groups.push(groupOne) 
    users[2].groups.push(groupOne)  
    users[2].groups.push(groupTwo) 
    users[3].groups.push(groupTwo) 
    await Promise.all(users.map(user => user.save()));
  } catch(err) {
    console.log(err)
  }
}

const makeSeeds = async () => {
  try {
    await mongoose.connect(uri)
    await truncateDatabase()
    await makeUsers()
    await makeGroups()
    await Promise.all(restaurants.map(restaurant => restaurant.save()))
    mongoose.connection.close()
  } catch(err) {
    console.log(err)
  }
}

makeSeeds()