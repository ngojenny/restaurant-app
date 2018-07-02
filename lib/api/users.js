const express = require('express')
const Router = express.Router
const router = Router()
const User = require('../models/User')

router.get('/', async (req, res, next) => {
  try {
    const docs = await User.find()
    console.log('hiya', docs)
    res.status(200).send(docs)
  } catch (err) {
    console.log('whats the error')
    next(err)
  }
})

module.exports = router