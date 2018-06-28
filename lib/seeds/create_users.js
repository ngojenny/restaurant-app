const User = require('../models/User')
const groups = require('./create_groups')

const emily = new User({
  firstName: 'Emily',
  lastName: 'Giang',
  email: 'emily.giang@gmail.com',
  password: '123',
  groups: [groups[0]]
})

const christine = new User({
  firstName: 'Christine',
  lastName: 'Tran',
  email: 'christine.tran8@hotmail.com',
  password: '123',
  groups: [groups[0]]
})

const jenny = new User({
  firstName: 'Jenny',
  lastName: 'Ngo',
  email: 'jennyngo16@gmail.com',
  password: '123',
  groups: [groups[0]]
})

const sally = new User({
  firstName: 'Sally',
  lastName: 'Smith',
  email: 'sally@gmail.com',
  password: '123',
  groups: [groups[0]]
})

module.exports = [emily, christine, jenny, sally]