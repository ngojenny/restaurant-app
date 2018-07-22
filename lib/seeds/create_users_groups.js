const User = require('../models/User')
const Group = require('../models/Group')
const restaurants = require('./create_restaurants')

const users = []
const groups = []

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

const saveInitialUsers = async () => {
 try {
  await User.remove({})
  await emily.save()
  await christine.save()
  await jenny.save()
  await sally.save()
 } catch (e) {
  console.error(e)
 }
}

saveInitialUsers()

const groupOne = new Group({
  name: 'Group One',
  users: [users[0], users[1], users[2]],
  restaurants: [restaurants[0], restaurants[1]],
})

const groupTwo = new Group({
  name: 'Group Two',
  users: [users[2], users[3]],
  restaurants: [restaurants[2]],
})

emily.groups.push(groupOne)
christine.groups.push(groupOne)
jenny.groups.push(groupOne)
jenny.groups.push(groupTwo)
sally.groups.push(groupTwo)

groups.push(groupOne)
groups.push(groupTwo)

console.log('userHERE', users)
console.log('groupsHERE', groups)

module.exports = {
  users,
  groups
}
