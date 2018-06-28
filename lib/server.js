const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User.js')
const Group = require('./models/Group.js')
const Restaurant = require('./models/Restaurant.js')
const PORT = 8080
const uri = 'mongodb://localhost:27017/restaurant-app'
const createUsers = require('./seeds/create_users.js')

mongoose
  .connect(uri)
  .then(() => {
    createUsers()
  })
  .catch(err => {
    console.log(err)
  })

const app = express()

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'ok' })
})

app.get('/users', async (req, res, next) => {
  try {
    const docs = await User.find()
    res.status(200).send({message: 'success', payload: docs })
  } catch (e) {
    next(e)
  }
});

app.post('/login/:name/:email', (req, res) => {
  const { name, email } = req.params
  res.status(200).json({ name: name, email: email })
})
// callback function will fire when its attached to the port successfully
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

//webpack dev server, look into this
