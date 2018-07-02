const express = require('express')
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/restaurant-app'
const app = express()
const PORT = 8080

app.use('/users', require('./api/users'))

app.use((err, req, res, next) => {
  console.log('hit')
  res.status(500).json({ err: err.toString() })
})

app.listen(PORT, async () => {
  await mongoose.connect(uri)
  console.log(`Listening on ${PORT}`)
})