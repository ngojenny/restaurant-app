const express = require('express')
const Router = express.Router
const router = Router()
const Restaurant = require('../models/Restaurant')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Restaurant.find()
    res.status(200).send(docs)
  } catch (err) {
    next(err)
  }
})

module.exports = router