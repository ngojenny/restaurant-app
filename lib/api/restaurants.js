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

router.get('/:restaurantId', async (req, res, next) => {
  try {
    const { restaurantId } = req.params
    const restaurant = await Restaurant.findById(restaurantId)
 
    if(!restaurant) {
      next(new Error('Restaurant not found'))
    }

    if(restaurant) {
      res.status(200).json(restaurant)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router