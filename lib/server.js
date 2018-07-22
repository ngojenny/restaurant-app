const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const config = require('config')
const API_PORT = process.env.PORT || config.PORT;
const MONGODB_URI = process.env.MONGODB_URI || config.MONGODB_URI;
const app = express()

app.use('/', express.static(
  path.join(__dirname, '../build')
))

app.use('/users', require('./api/users'))
app.use('/groups', require('./api/groups'))

app.use((err, req, res, next) => {
  console.log('hit')
  res.status(500).json({ err: err.toString() })
})

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../build/index.html')
  )
})


app.listen(PORT, async () => {
  await mongoose.connect(MONGODB_URI)
  console.log(`Listening on ${API_PORT}`)
})