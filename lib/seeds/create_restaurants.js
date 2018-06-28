const Restaurant = require('../models/Restaurant')

const restaurants = []

const queenMarg = new Restaurant({
  name: 'Queen Margherita',
  price: 2,
  location: '772 Dundas St W, Toronto, ON M6J 1V1',
  nearby: `Near Emily's`,
  cuisine: 'Italian',
  topPicks: ['Margherita', 'The Dominator', 'Good Marianna'],
  tips: 'Portions are large. Share the pizzas',
})

restaurants.push(queenMarg)

const kinkaIzakaya = new Restaurant({
  name: 'Kinka Izakaya',
  price: 2,
  location: '398 Church St, Toronto, ON M5B 2A2',
  nearby: 'Walkable from College station',
  cuisine: 'Japanese',
  topPicks: ['dish1', 'dish2', 'dish3', 'dish4'],
  tips: `Go with lots of people to try all the things. Don't get the cheesy oyster thing. Loud atmosphere`
})

restaurants.push(kinkaIzakaya)

module.exports = restaurants